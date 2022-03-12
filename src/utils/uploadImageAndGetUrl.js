export const uploadImageAndGetUrl = async (file) => {
  const api = 'https://api.cloudinary.com/v1_1/dc1k4vnoy/upload';

  const formData = new FormData();

  formData.append('upload_preset', 'firestore-crud-fernando-r1');
  formData.append('file', file);

  try {
    const resp = await fetch(api, {
      method: 'POST',
      body: formData,
    });
    if (resp?.ok) {
      const { url } = await resp.json();
      return url;
    } else {
      throw new Error('Fallo al subir');
    }
  } catch (err) {
    console.log({ err });
  }
};
