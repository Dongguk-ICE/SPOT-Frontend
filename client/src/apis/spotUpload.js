import {isAxiosError} from 'axios';
import {instance} from './axios';

export const spotUpload = async (imageFile) => {
  try {
    const data = {
      distance: 1.2,
      time: 10,
    };

    const formData = new FormData();
    formData.append('image', imageFile);
    formData.append('photoRequest', JSON.stringify(data));

    const response = await instance.post(`/api/boarding-record`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response;
  } catch (error) {
    if (isAxiosError(error)) {
      throw error;
    } else {
      throw error;
    }
  }
};
