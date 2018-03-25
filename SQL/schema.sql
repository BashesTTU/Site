CREATE TABLE "Student" (
	"ID" serial NOT NULL,
	"DepartmentID" integer NOT NULL,
	"CityID" integer NOT NULL,
	"MajorID" integer NOT NULL,
	"ClassificationID" integer NOT NULL,
	"IsMale" BOOLEAN NOT NULL,
	"IsResident" BOOLEAN NOT NULL,
	CONSTRAINT Student_pk PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Department" (
	"ID" serial NOT NULL,
	"College" varchar(2) NOT NULL,
	"Name" varchar NOT NULL,
	"FullName" varchar NOT NULL,
	CONSTRAINT Department_pk PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "City" (
	"ID" serial NOT NULL,
	"Name" varchar NOT NULL,
	CONSTRAINT City_pk PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Major" (
	"ID" serial NOT NULL,
	"Name" varchar NOT NULL,
	"FullName" serial NOT NULL,
	CONSTRAINT Major_pk PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "Classification" (
	"ID" serial NOT NULL,
	"Name" varchar NOT NULL,
	"FullName" varchar NOT NULL,
	CONSTRAINT Classification_pk PRIMARY KEY ("ID")
) WITH (
  OIDS=FALSE
);



ALTER TABLE "Student" ADD CONSTRAINT "Student_fk0" FOREIGN KEY ("DepartmentID") REFERENCES "Department"("ID");
ALTER TABLE "Student" ADD CONSTRAINT "Student_fk1" FOREIGN KEY ("CityID") REFERENCES "City"("ID");
ALTER TABLE "Student" ADD CONSTRAINT "Student_fk2" FOREIGN KEY ("MajorID") REFERENCES "Major"("ID");
ALTER TABLE "Student" ADD CONSTRAINT "Student_fk3" FOREIGN KEY ("ClassificationID") REFERENCES "Classification"("ID");