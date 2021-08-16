export const getFilledArray = (num) => Array.from({length: num}, (_, i) => i + 1);

export const checkErrorsFromAPI = (response) => {
    if(response.status !== 200) {
        throw new Error(response.statusText);
    }
};