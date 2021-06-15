import http from "./http-common.js";

class UploadFilesService {
  upload(file, onUploadProgress) {
    let formData = new FormData();

    formData.append("filedata", file);

    return http.post("hxypc/attachment/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data"
      },
      onUploadProgress
    });
  }
}

export default new UploadFilesService();