CREATE TABLE public.persons
(
    id bigint NOT NULL,
    fullname text COLLATE pg_catalog."default" NOT NULL,
    birth date NOT NULL,
    adopted boolean NOT NULL,
	createdAt date NOT NULL,
	updatedAt date NOT NULL,
    CONSTRAINT persons_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE public.persons
    OWNER to postgres;