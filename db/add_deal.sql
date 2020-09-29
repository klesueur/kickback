INSERT INTO deals (lease_id, customer_first, customer_last, purchase_total, month, rep_id)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *;