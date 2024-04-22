-- Inserir 10 funcionários
INSERT INTO employees (name, email, password, createdAt)
VALUES 
    ('Alice', 'alice@example.com', 'password1', NOW()),
    ('Bob', 'bob@example.com', 'password2', NOW() - INTERVAL '1' Year),
    ('Charlie', 'charlie@example.com', 'password3', NOW() - INTERVAL '2' Year),
    ('David', 'david@example.com', 'password4', NOW() - INTERVAL '3' Year),
    ('Eva', 'eva@example.com', 'password5', NOW() - INTERVAL '4' Year),
    ('Fiona', 'fiona@example.com', 'password6', NOW() - INTERVAL '5' Year),
    ('George', 'george@example.com', 'password7', NOW() - INTERVAL '6' Year),
    ('Hannah', 'hannah@example.com', 'password8', NOW() - INTERVAL '7' Year),
    ('Ian', 'ian@example.com', 'password9', NOW() - INTERVAL '8' Year),
    ('Jack', 'jack@example.com', 'password10', NOW() - INTERVAL '9' Year);

-- Inserir 10 produtos
INSERT INTO products (reference, type, quantity, price, createdAt)
VALUES 
    ('REF1', 'Camisa', 10, 50.00, NOW()),
    ('REF2', 'Calça', 15, 75.00, NOW() - INTERVAL '1' Year),
    ('REF3', 'Shorts', 20, 30.00, NOW() - INTERVAL '2' Year),
    ('REF4', 'Tênis', 25, 100.00, NOW() - INTERVAL '3' Year),
    ('REF5', 'Meias', 30, 10.00, NOW() - INTERVAL '4' Year),
    ('REF6', 'Bermuda', 20, 40.00, NOW() - INTERVAL '5' Year),
    ('REF7', 'Jaqueta', 15, 120.00, NOW() - INTERVAL '6' Year),
    ('REF8', 'Vestido', 20, 80.00, NOW() - INTERVAL '7' Year),
    ('REF9', 'Sapato', 25, 150.00, NOW() - INTERVAL '8' Year),
    ('REF10', 'Saia', 15, 60.00, NOW() - INTERVAL '9' Year);

-- Inserir 10 vendas
INSERT INTO sales (employeeId, total, createdAt)
VALUES 
    (FLOOR(RAND() * 10) + 1, 250.00, NOW()),
    (FLOOR(RAND() * 10) + 1, 200.00, NOW() - INTERVAL '1' Year),
    (FLOOR(RAND() * 10) + 1, 300.00, NOW() - INTERVAL '2' Year),
    (FLOOR(RAND() * 10) + 1, 350.00, NOW() - INTERVAL '3' Year),
    (FLOOR(RAND() * 10) + 1, 400.00, NOW() - INTERVAL '4' Year),
    (FLOOR(RAND() * 10) + 1, 450.00, NOW() - INTERVAL '5' Year),
    (FLOOR(RAND() * 10) + 1, 500.00, NOW() - INTERVAL '6' Year),
    (FLOOR(RAND() * 10) + 1, 550.00, NOW() - INTERVAL '7' Year),
    (FLOOR(RAND() * 10) + 1, 600.00, NOW() - INTERVAL '8' Year),
    (FLOOR(RAND() * 10) + 1, 650.00, NOW() - INTERVAL '9' Year);

    -- Inserir 10 vendas
INSERT INTO sales (employeeId, total, createdAt)
VALUES 
    (FLOOR(RAND() * 10) + 1, 250.00, NOW()),
    (FLOOR(RAND() * 10) + 1, 200.00, NOW() - INTERVAL '1' Year),
    (FLOOR(RAND() * 10) + 1, 300.00, NOW() - INTERVAL '1' Year),
    (FLOOR(RAND() * 10) + 1, 350.00, NOW() - INTERVAL '1' Year),
    (FLOOR(RAND() * 10) + 1, 400.00, NOW() - INTERVAL '3' Year),
    (FLOOR(RAND() * 10) + 1, 450.00, NOW() - INTERVAL '5' Year),
    (FLOOR(RAND() * 10) + 1, 500.00, NOW() - INTERVAL '4' Year),
    (FLOOR(RAND() * 10) + 1, 550.00, NOW() - INTERVAL '4' Year),
    (FLOOR(RAND() * 10) + 1, 600.00, NOW() - INTERVAL '9' Year),
    (FLOOR(RAND() * 10) + 1, 650.00, NOW() - INTERVAL '9' Year);

    -- Inserir 10 vendas
INSERT INTO sales (employeeId, total, createdAt)
VALUES 
    (FLOOR(RAND() * 10) + 1, 250.00, NOW()),
    (FLOOR(RAND() * 10) + 1, 200.00, NOW() - INTERVAL '7' Year),
    (FLOOR(RAND() * 10) + 1, 300.00, NOW() - INTERVAL '7' Year),
    (FLOOR(RAND() * 10) + 1, 350.00, NOW() - INTERVAL '6' Year),
    (FLOOR(RAND() * 10) + 1, 400.00, NOW() - INTERVAL '1' Year),
    (FLOOR(RAND() * 10) + 1, 450.00, NOW() - INTERVAL '5' Year),
    (FLOOR(RAND() * 10) + 1, 500.00, NOW() - INTERVAL '4' Year),
    (FLOOR(RAND() * 10) + 1, 550.00, NOW() - INTERVAL '4' Year),
    (FLOOR(RAND() * 10) + 1, 600.00, NOW() - INTERVAL '2' Year),
    (FLOOR(RAND() * 10) + 1, 650.00, NOW() - INTERVAL '3' Year);


-- Inserir 10 itens de venda
INSERT INTO sale_items (saleId, productId, quantity, createdAt)
SELECT 
    s.id AS saleId, 
    FLOOR(RAND() * 10) + 1 AS productId, 
    FLOOR(RAND() * 100) + 1 AS quantity, 
    s.createdAt AS createdAt
FROM 
    sales s
ORDER BY 
    RAND()
LIMIT 30;
