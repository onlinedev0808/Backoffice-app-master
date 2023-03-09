export const capitalize = string => {
  return string[0].toUpperCase() + string.substring(1, string.length)
}

export const getLSItem = item => localStorage.getItem(item) || ''

export const setLSItem = (item, value) => localStorage.setItem(item, value)

export const removeLSItem = item => localStorage.removeItem(item)

export const bodyLock = status => {
  const method = status ? 'add' : 'remove'

  document.body.classList[method]('lock')
}

const toDataURL = url => {
  return fetch(url)
    .then(response => response.blob())
    .then(blob => URL.createObjectURL(blob))
}

export const createLink = (href, fileName) => {
  const a = document.createElement('a')

  if (fileName) a.download = fileName
  a.href = href
  a.target = '_blank'
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export const downloadFile = async (fileUrl, filename) => {
  const a = document.createElement('a')

  a.href = await toDataURL(fileUrl)
  a.download = filename
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
}

export const createFormDataFileUpload = (file, type) => {
  const formData = new FormData()

  console.log(file)
  formData.append('file', file)
  formData.append('name', file.name)
  formData.append('type', type)

  return formData
}

export const createUploadInput = (productId, uploadFnc) => {
  return new Promise((resolve, reject) => {
    const input = document.createElement('input')

    input.type = 'file'
    document.body.appendChild(input)
    input.click()

    const listener = e => {
      const formData = createFormDataFileUpload(e.target.files[0], 'preview')

      uploadFnc(productId, formData)
        .then(() => {
          document.body.removeChild(input)
          input.removeEventListener('input', listener)
          resolve()
        })
        .catch(reject)
    }

    input.addEventListener('input', listener)
  })
}

export const dateMonthYear = date => {
  const d = new Date(date)

  return `${d.getDate()}/${d.getMonth()}/${d.getFullYear()}`
}
