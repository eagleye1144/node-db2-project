const cars = [
    {
        vin: 'JH4KA3240LC800239',
        make: 'toyota',
        model: 'prius',
        mileage: 215000,
        title: 'clean',
        transmission: 'manual',
    },
    {
        vin: '3FAFP08Z66R143414',
        make: 'toyota',
        model: 'corrolla',
        mileage: 115000,
        title: 'salvage',

    },
    {
        vin: 'JH4DA9360LS010859',
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