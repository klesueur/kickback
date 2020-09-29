INSERT INTO deals (lease_id, customer_first, customer_last, purchase_total, month)
VALUES ($1, $2, $3, $4, $5)
RETURNING *;