-- values/rows that exists in database is ignored
INSERT INTO guardians (name, phone_number)
VALUES ('guardian01', '+631234567890'),
    ('guardian02', '+631234567891'),
    ('guardian03', '+631234567892'),
    ('guardian04', '+631234567893'),
    ('guardian05', '+631234567894') ON CONFLICT DO NOTHING;
--
--
INSERT INTO students (
        first_name,
        last_name,
        gender,
        email,
        password,
        guardian_id
    )
VALUES (
        'student01',
        '___',
        'MALE',
        'student01@email.edu.ph',
        '$2b$12$9/ypOeGi/GbFmips/VIj6u7Pnkn3wux4oifzGMVv74rjvrbRMrIXG',
        1
    ),
    (
        'student02',
        '___',
        'MALE',
        'student02@email.edu.ph',
        '$2b$12$9/ypOeGi/GbFmips/VIj6u7Pnkn3wux4oifzGMVv74rjvrbRMrIXG',
        2
    ),
    (
        'student03',
        '___',
        'FEMALE',
        'student03@email.edu.ph',
        '$2b$12$9/ypOeGi/GbFmips/VIj6u7Pnkn3wux4oifzGMVv74rjvrbRMrIXG',
        3
    ),
    (
        'student04',
        '___',
        'MALE',
        'jstudent04@email.edu.ph',
        '$2b$12$9/ypOeGi/GbFmips/VIj6u7Pnkn3wux4oifzGMVv74rjvrbRMrIXG',
        4
    ),
    (
        'student05',
        '___',
        'FEMALE',
        'student05@email.edu.ph',
        '$2b$12$9/ypOeGi/GbFmips/VIj6u7Pnkn3wux4oifzGMVv74rjvrbRMrIXG',
        5
    ) ON CONFLICT DO NOTHING;
--
--
INSERT INTO teachers (name)
VALUES ('teacher01'),
    ('teacher02'),
    ('teacher03') ON CONFLICT DO NOTHING;
--
--
INSERT INTO subjects (name)
VALUES ('MATH'),
    ('SCIENCE'),
    ('PHILOSOPHY'),
    ('ARTS'),
    ('SPORTS'),
    ('ETHICS') ON CONFLICT DO NOTHING;
--
--
INSERT INTO school_years (year_name)
VALUES ('Year 2025') ON CONFLICT DO NOTHING;
--
--
INSERT INTO levels (grade, name)
VALUES (1, 'Grade 1 (E)'),
    (2, 'Grade 2 (E)'),
    (3, 'Grade 3 (E)'),
    (4, 'Grade 4 (E)'),
    (5, 'Grade 5 (E)'),
    (6, 'Grade 6 (E)'),
    (7, 'Grade 7 (HS)'),
    (8, 'Grade 8 (HS)'),
    (9, 'Grade 9 (HS)'),
    (10, 'Grade 10 (HS)'),
    (11, 'Grade 11 (SHS)'),
    (12, 'Grade 12 (SHS)'),
    (13, '1ST YEAR | FRESHMAN (C)'),
    (14, '2ND YEAR | SOPHOMORE (C)'),
    (15, '3RD YEAR | JUNIOR (C)'),
    (16, '4TH YEAR | SENIOR (C)') ON CONFLICT DO NOTHING;
--
--
INSERT INTO terms (year_id, term_name, term_start, term_end)
VALUES (
        1,
        '1ST TERM (2025)',
        make_timestamp(
            EXTRACT(
                YEAR
                FROM CURRENT_TIMESTAMP
            )::INT,
            1,
            4,
            0,
            0,
            0
        ),
        make_timestamp(
            EXTRACT(
                YEAR
                FROM CURRENT_TIMESTAMP
            )::INT,
            6,
            12,
            0,
            0,
            0
        )
    ),
    (
        1,
        '2ND TERM (2025)',
        make_timestamp(
            EXTRACT(
                YEAR
                FROM CURRENT_TIMESTAMP
            )::INT,
            7,
            1,
            0,
            0,
            0
        ),
        make_timestamp(
            EXTRACT(
                YEAR
                FROM CURRENT_TIMESTAMP
            )::INT,
            11,
            30,
            0,
            0,
            0
        )
    ) ON CONFLICT DO NOTHING;
--
--
INSERT INTO student_levels (level_id, student_id)
VALUES (13, '751c1318-36ed-46e2-82f8-75da3e43b5b9'),
    (13, 'e300afb3-2874-422e-8a8d-7183261a9c86'),
    (14, 'df89de98-8518-40b1-b5c2-0d4e54642829'),
    (7, '606b115d-5a84-4b18-a242-e2b7f2b14a7b'),
    (5, 'a100b798-68a4-4e4b-be7a-4e36ac302750') ON CONFLICT DO NOTHING;
--
--
INSERT INTO courses (name, subject_id)
VALUES ('DISCRETE MATH', 1),
    ('BIOLOGY', 2),
    ('INTRODUCTION TO STOICISM', 3),
    ('MUSIC THEORY', 4),
    ('PHYSICAL EDUCATION', 5),
    ('MODERN ETHICS', 6) ON CONFLICT DO NOTHING;
--
--