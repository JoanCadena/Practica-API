# Script Base de datos

-- Database: api-bookmarks

-- DROP DATABASE "api-bookmarks";

CREATE DATABASE "api-bookmarks"
    WITH 
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'Spanish_Spain.1252'
    LC_CTYPE = 'Spanish_Spain.1252'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

# Script Tabla

-- Table: public.marcadores

-- DROP TABLE public.marcadores;

CREATE TABLE public.marcadores
(
    url text COLLATE pg_catalog."default" NOT NULL,
    nombre text COLLATE pg_catalog."default" NOT NULL,
    descripcion text COLLATE pg_catalog."default" NOT NULL,
    id smallint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 32767 CACHE 1 ),
    CONSTRAINT marcadores_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.marcadores
    OWNER to postgres;