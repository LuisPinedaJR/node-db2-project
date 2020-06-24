exports.seed = async function(knex) {
  await knex('cars').truncate()

  await knex('cars').insert([
    { vin: 's3232323ws332', make: 'chevy', model: 'camaro', mileage: 1000 },
    { vin: 's84736d6djhh2', make: 'honda', model: 'civic', mileage: 20000 },
    { vin: 's38hfdsu884hd', make: 'toyota', model: 'camry', mileage: 3000 },
  ])
}
