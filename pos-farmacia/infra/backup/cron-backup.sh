#!/usr/bin/env bash
set -euo pipefail
STAMP=$(date +"%Y%m%d_%H%M%S")
docker exec -t db pg_dump -U postgres -d pos | gzip > /backups/pos_$STAMP.sql.gz
find /backups -type f -mtime +30 -name 'pos_*.sql.gz' -delete
