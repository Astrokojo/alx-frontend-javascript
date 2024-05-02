export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) resolve({ status: 200, body: 'Success' });
    else reject(Error('The fake API is not working currently'));
  }).catch((error) => {
    console.error('Error from getResponseFromAPI:', error.message);
    throw error; // Re-throw the error to propagate it further if needed
  });
}
