# Employees csv node

## Parameters
- employeeId (Required)
- employeeAttr (Optional)

## How it works?
Enter the src folder and execute:

```
node index.js <employeeId> <employeeAttr>
```

## Example
Command:
```
node index.js 5
```
Response:
```
{
  id: '5',
  first_name: 'Olenka',
  last_name: 'De Mars',
  email: 'odemars4@mac.com',
  ip_address: '85.77.178.159'
}
```
Or

Command:
```
node index.js 5 first_name
```
Response:
```
{ first_name: 'Olenka' }
```
