# CarbonWise - Database Schema

## Users
- id
- name
- email
- password

## CarbonRecords
- id
- user_id
- transport_emission
- electricity_emission
- food_emission
- waste_emission
- total_emission
- created_at

## Recommendations
- id
- user_id
- recommendation
- category
- created_at
