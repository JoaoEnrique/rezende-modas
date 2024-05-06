-- Inserir 10 funcionários
INSERT INTO employees (name, email, password, createdAt, updatedAt)
VALUES 
    ('Alice', 'alice@example.com', 'password1', NOW(), '00-00-0000'),
    ('Bob', 'bob@example.com', 'password2', NOW() - INTERVAL '1' Year, '00-00-0000'),
    ('Charlie', 'charlie@example.com', 'password3', NOW() - INTERVAL '2' Year, '00-00-0000'),
    ('David', 'david@example.com', 'password4', NOW() - INTERVAL '3' Year, '00-00-0000'),
    ('Eva', 'eva@example.com', 'password5', NOW() - INTERVAL '4' Year, '00-00-0000'),
    ('Fiona', 'fiona@example.com', 'password6', NOW() - INTERVAL '5' Year, '00-00-0000'),
    ('George', 'george@example.com', 'password7', NOW() - INTERVAL '6' Year, '00-00-0000'),
    ('Hannah', 'hannah@example.com', 'password8', NOW() - INTERVAL '7' Year, '00-00-0000'),
    ('Gabriel', 'gabriel@gmail.com', '12345678', NOW() - INTERVAL '8' Year, '00-00-0000'),
    ('Joao', 'joao@gmail.com', '12345678', NOW() - INTERVAL '9' Year, '00-00-0000');

-- Inserir 10 produtos
INSERT INTO products (name, reference, type, quantity, price, createdAt, updatedAt)
VALUES 
    ('Camisa', 'REF1', 'Camisa', 10, 50.00, NOW(), '00-00-0000'),
    ('Calça', 'REF2', 'Calça', 15, 75.00, NOW() - INTERVAL '1' Year, '00-00-0000'),
    ('Shorts', 'REF3', 'Shorts', 20, 30.00, NOW() - INTERVAL '2' Year, '00-00-0000'),
    ('Tênis', 'REF4', 'Tênis', 25, 100.00, NOW() - INTERVAL '3' Year, '00-00-0000'),
    ('Meias', 'REF5', 'Meias', 30, 10.00, NOW() - INTERVAL '4' Year, '00-00-0000'),
    ('Bermuda', 'REF6', 'Bermuda', 20, 40.00, NOW() - INTERVAL '5' Year, '00-00-0000'),
    ('Jaqueta', 'REF7', 'Jaqueta', 15, 120.00, NOW() - INTERVAL '6' Year, '00-00-0000'),
    ('Vestido', 'REF8', 'Vestido', 20, 80.00, NOW() - INTERVAL '7' Year, '00-00-0000'),
    ('Sapato', 'REF9', 'Sapato', 25, 150.00, NOW() - INTERVAL '8' Year, '00-00-0000'),
    ('Saia', 'REF10', 'Saia', 15, 60.00, NOW() - INTERVAL '9' Year, '00-00-0000');

-- Inserir 10 vendas
INSERT INTO sales (employeeId, total, createdAt, updatedAt)
VALUES 
    (FLOOR(RAND() * 10) + 1, 250.00, NOW(), '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 200.00, NOW() - INTERVAL '1' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 300.00, NOW() - INTERVAL '2' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 350.00, NOW() - INTERVAL '3' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 400.00, NOW() - INTERVAL '4' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 450.00, NOW() - INTERVAL '5' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 500.00, NOW() - INTERVAL '6' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 550.00, NOW() - INTERVAL '7' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 600.00, NOW() - INTERVAL '8' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 650.00, NOW() - INTERVAL '9' Year, '00-00-0000');

    -- Inserir 10 vendas
INSERT INTO sales (employeeId, total, createdAt, updatedAt)
VALUES 
    (FLOOR(RAND() * 10) + 1, 250.00, NOW(), '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 200.00, NOW() - INTERVAL '1' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 300.00, NOW() - INTERVAL '1' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 350.00, NOW() - INTERVAL '1' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 400.00, NOW() - INTERVAL '3' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 450.00, NOW() - INTERVAL '5' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 500.00, NOW() - INTERVAL '4' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 550.00, NOW() - INTERVAL '4' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 600.00, NOW() - INTERVAL '9' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 650.00, NOW() - INTERVAL '9' Year, '00-00-0000');

    -- Inserir 10 vendas
INSERT INTO sales (employeeId, total, createdAt, updatedAt)
VALUES 
    (FLOOR(RAND() * 10) + 1, 250.00, NOW(), '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 200.00, NOW() - INTERVAL '7' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 300.00, NOW() - INTERVAL '7' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 350.00, NOW() - INTERVAL '6' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 400.00, NOW() - INTERVAL '1' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 450.00, NOW() - INTERVAL '5' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 500.00, NOW() - INTERVAL '4' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 550.00, NOW() - INTERVAL '4' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 600.00, NOW() - INTERVAL '2' Year, '00-00-0000'),
    (FLOOR(RAND() * 10) + 1, 650.00, NOW() - INTERVAL '3' Year, '00-00-0000');


-- Inserir 10 itens de venda
INSERT INTO sale_items (saleId, productId, quantity, createdAt, updatedAt)
SELECT 
    s.id AS saleId, 
    FLOOR(RAND() * 10) + 1 AS productId, 
    FLOOR(RAND() * 100) + 1 AS quantity, 
    s.createdAt AS createdAt,
    '00-00-0000'
FROM 
    sales s
ORDER BY 
    RAND()
LIMIT 30;
