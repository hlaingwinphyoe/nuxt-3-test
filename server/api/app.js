export default defineEventHandler(async (event) => {
    // // handle query param
    // const { name } = getQuery(event);

    // // handle post data
    // const { age } = await readBody(event)

    const { data } = await $fetch('https://api.currencyapi.com/v3/latest?apikey=cur_live_EK5G11lSQKoU9VqeKCpi5EmhVTnYLESBByNLsxyn')

    return data;
});