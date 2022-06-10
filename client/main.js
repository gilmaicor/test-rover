/* eslint-disable @typescript-eslint/no-unused-vars */
async function fileUpload(formElement) {
  const formData = new FormData(formElement);
  try {
    const response = await fetch('http://localhost:3000/file/upload', {
      method: 'POST',
      body: formData,
      dataType: 'jsonp',
    });

    if (response.status === 200 || response.status === 201) {
      alert('successfully uploaded file');
    } else {
      alert('failed to upload');
    }
  } catch (e) {
    console.log(e);
    alert('some error occured while uploading file');
  }
}
