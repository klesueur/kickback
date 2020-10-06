SELECT count(month)
FROM deals
WHERE month = $1 AND rep_id = $2;