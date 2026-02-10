-- Create the database (run this separately if needed, or stick to 'car_rental' if it exists)
-- CREATE DATABASE car_rental;

-- Connect to the database
-- \c car_rental;

-- creating the table
CREATE TABLE IF NOT EXISTS cars (
    id VARCHAR(50) PRIMARY KEY,
    brand VARCHAR(100) NOT NULL,
    model VARCHAR(100) NOT NULL,
    price_per_day DECIMAL(10, 2) NOT NULL,
    available BOOLEAN DEFAULT TRUE
);

-- Insert some dummy data
INSERT INTO cars (id, brand, model, price_per_day, available) VALUES
('C001', 'Toyota', 'Camry', 60.00, true),
('C002', 'Honda', 'Civic', 55.00, true),
('C003', 'Ford', 'Mustang', 120.00, true),
('C004', 'Tesla', 'Model 3', 150.00, true),
('C005', 'Chevrolet', 'Malibu', 50.00, true);
