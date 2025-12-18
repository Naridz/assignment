# Transaction API

This is a simple personal finance API built with Node.js, TypeScript, Express, and MongoDB. Users can track their transactions including income and expenses. Supports softdelete and restore functionality.

## Tools
- Node.js + TypeScript
- Express
- MongoDB + Mongoose

## Setup Instructions

```bash
cd assignment-1
npm install
```
Create a .env file in the root directory:

```env
PORT=<port>
MONGO_URI=<your_mongodb_connection_string>
```
```bash
npm run dev
```
---

## Design Decisions

1. Soft Delete:
- Instead of permanently deleting transactions, we use an isDeleted boolean field.
- This allows restoring deleted transactions later.

2. Partial Update with PATCH:
- Use PATCH to update only the fields provided in the request body.
- More flexible than PUT which would require all fields.

3. Validation:
- type must be "income" or "expense".
- amount must be a positive number.


4. Filtering:
- GET /transactions supports filtering by type query param.
- Soft deleted transactions are automatically excluded.

---

## API Endpoints

| Method   | Endpoints                  | Description              |
|------------------ |-------------------|--------------------------|
| POST     | /transactions              | Create a new transaction |
| GET      | /transactions              | Get all transactions     |
| GET      | /transactions/:id          | Get transaction by ID    |
| PUT      | /transactions/:id          | Update Transaction       |
| DELETE   | /transactions/:id          | Soft delete transaction  |
| PATCH    | /transactions/:id/restore  | Restore transaction      |

---

### Example: Create Transaction

POST /transactions
```json
{
  "type": "income",
  "amount": 1000,
  "description": "Salary",
}
```