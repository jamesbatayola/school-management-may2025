ALTER TABLE students
ADD COLUMN password TEXT NOT NULL;
-- REMOVE ALL ROWS/DATA ON TABLE
TRUNCATE TABLE students RESTART IDENTITY CASCADE;
TRUNCATE TABLE subjects RESTART IDENTITY CASCADE;
-- Set year_start default to January 1st of the current year
ALTER TABLE school_years
ALTER COLUMN year_start
SET DEFAULT make_timestamp(
        EXTRACT(
            YEAR
            FROM CURRENT_DATE
        )::INT,
        1,
        1,
        0,
        0,
        0
    );
-- Set year_end default to November 30th of the current year
ALTER TABLE school_years
ALTER COLUMN year_end
SET DEFAULT make_timestamp(
        EXTRACT(
            YEAR
            FROM CURRENT_DATE
        )::INT,
        11,
        30,
        0,guardianId: number
        0,
        0
    );
--
--
ALTER TABLE student_level
