"use client";

import { useState } from "react";

export default function Home() {
  const [patente, setPatente] = useState("");
  const [kilometraje, setKilometraje] = useState("");
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState<any>(null);
  const [error, setError] = useState("");

  const validarPatenteChilena = (patente: string): boolean => {
    // Formato chileno: XXXX00 (4 letras + 2 números) o XX0000 (2 letras + 4 números)
    const formatoAntiguo = /^[A-Z]{2}[0-9]{4}$/;
    const formatoNuevo = /^[A-Z]{4}[0-9]{2}$/;
    const patenteUpper = patente.toUpperCase().replace(/\s/g, "");
    return formatoAntiguo.test(patenteUpper) || formatoNuevo.test(patenteUpper);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setResultado(null);

    // Validaciones
    if (!patente.trim()) {
      setError("Por favor ingresa una patente");
      return;
    }

    if (!validarPatenteChilena(patente)) {
      setError("Formato de patente inválido. Debe ser XXXX00 o XX0000");
      return;
    }

    if (!kilometraje.trim() || isNaN(Number(kilometraje)) || Number(kilometraje) < 0) {
      setError("Por favor ingresa un kilometraje válido");
      return;
    }

    setLoading(true);

    try {
      // Llamada a la API
      const response = await fetch(
        `https://api.example.com/cotizacion/${patente.toUpperCase()}?kilometraje=${kilometraje}&api_id=2f21c536-3cff-432b-9948-3492dc459d4c`
      );

      if (!response.ok) {
        throw new Error("No se pudo obtener la cotización");
      }

      const data = await response.json();
      setResultado(data);
    } catch (err) {
      setError("Error al consultar la API. Por favor intenta nuevamente.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const formatearPrecio = (precio: number) => {
    return new Intl.NumberFormat("es-CL", {
      style: "currency",
      currency: "CLP",
    }).format(precio);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Cotiza tu Vehículo
            </h1>
            <p className="text-lg text-gray-600">
              Ingresa tu patente y kilometraje para obtener una cotización instantánea
            </p>
          </div>

          {/* Formulario */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="patente"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Patente del Vehículo
                </label>
                <input
                  type="text"
                  id="patente"
                  value={patente}
                  onChange={(e) => setPatente(e.target.value.toUpperCase())}
                  placeholder="Ej: ABCD12 o AB1234"
                  maxLength={6}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-lg font-semibold tracking-wider"
                />
              </div>

              <div>
                <label
                  htmlFor="kilometraje"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Kilometraje
                </label>
                <input
                  type="number"
                  id="kilometraje"
                  value={kilometraje}
                  onChange={(e) => setKilometraje(e.target.value)}
                  placeholder="Ej: 50000"
                  min="0"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none text-lg"
                />
              </div>

              {error && (
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <p className="text-red-700 text-sm font-medium">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-4 rounded-lg transition-all transform hover:scale-[1.02] active:scale-[0.98] disabled:transform-none shadow-lg"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Consultando...
                  </span>
                ) : (
                  "Obtener Cotización"
                )}
              </button>
            </form>
          </div>

          {/* Resultado */}
          {resultado && (
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl shadow-xl p-8 border-2 border-green-200">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  Cotización Disponible
                </h2>
                <p className="text-gray-600 mb-6">
                  Patente: <span className="font-bold">{patente}</span> • Kilometraje:{" "}
                  <span className="font-bold">{Number(kilometraje).toLocaleString("es-CL")} km</span>
                </p>
                <div className="bg-white rounded-xl p-6 shadow-md">
                  <p className="text-sm text-gray-600 mb-2">Precio de Retoma</p>
                  <p className="text-5xl font-bold text-green-600">
                    {formatearPrecio(resultado.precio || 0)}
                  </p>
                </div>
                {resultado.marca && (
                  <div className="mt-6 grid grid-cols-2 gap-4 text-left">
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-xs text-gray-500 mb-1">Marca</p>
                      <p className="font-semibold text-gray-900">{resultado.marca}</p>
                    </div>
                    <div className="bg-white rounded-lg p-4">
                      <p className="text-xs text-gray-500 mb-1">Modelo</p>
                      <p className="font-semibold text-gray-900">{resultado.modelo}</p>
                    </div>
                    {resultado.año && (
                      <div className="bg-white rounded-lg p-4">
                        <p className="text-xs text-gray-500 mb-1">Año</p>
                        <p className="font-semibold text-gray-900">{resultado.año}</p>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Información adicional */}
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              La cotización es referencial y puede variar según el estado del vehículo
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
