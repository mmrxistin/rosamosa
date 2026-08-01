#!/usr/bin/env bash
set -e
sudo -u postgres psql <<'SQL'
DO $$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_roles WHERE rolname = 'strapi') THEN
      CREATE ROLE strapi WITH LOGIN PASSWORD 'strapi';
   END IF;
END $$;

DO $$
BEGIN
   IF NOT EXISTS (SELECT FROM pg_database WHERE datname = 'strapi') THEN
      CREATE DATABASE strapi OWNER strapi;
   END IF;
END $$;

ALTER ROLE strapi SET client_encoding TO 'utf8';
ALTER ROLE strapi SET default_transaction_isolation TO 'read committed';
ALTER ROLE strapi SET timezone TO 'UTC';
SQL
