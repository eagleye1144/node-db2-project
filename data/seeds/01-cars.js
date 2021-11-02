const cars = [
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '22222222222222',
        make: 'toyota',
        model: 'corrolla',
        mileage: 115000,
        title: 'salvage',

    },
    {
        vin: '3333333333333',
        make: 'ford',
        model: 'focus',
        mileage: 15000,
        title: 'salvage',

    }

]








exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}