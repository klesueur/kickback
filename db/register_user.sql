INSERT INTO users (email, first, last, company, password)
VAlUES ($1, $2, $3, $4, $5)
RETURNING email, first, company, password;