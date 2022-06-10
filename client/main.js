/* eslint-disable @typescript-eslint/no-unused-vars */
async function fileUpload(formElement) {
  const formData = new FormData(formElement);
  try {
    const response = await fetch('http://localhost:3000/file/upload', {
      method: 'POST',
      body: formData,
      dataType: 'jsonp',
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        return data; // this will be a string
      });

    if (response.length) {
      alert('successfully uploaded file');
      const output = response.map((rover) => {
        return `<tr><td>${rover.x}</td><td>${rover.y}</td><td>${rover.cardinal}</td></tr>`;
      });
      document.querySelector('#header').innerHTML = output.join('');
    } else {
      alert('failed to upload');
    }
  } catch (e) {
    console.log(e);
    alert('some error occured while uploading file');
  }
}
