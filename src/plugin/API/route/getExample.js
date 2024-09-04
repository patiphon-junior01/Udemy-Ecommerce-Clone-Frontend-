import Axios from "../Init"; // นำเข้า Axios โดยตรง


const getExampleOne = async (params) => {
  const ck = { value: "cookie value" }
  try {
    const response = await Axios.get(`/api/users/${params}`, {
      headers: {
        Authorization: `Bearer ${ck?.value}`,
      },
    });
    return { status: true, response: response.data };
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
    return {
      status: false,
      response: error.response ? error.response.data : error.message,
    };
  }
};

const getExample2 = async () => {
  const ck = { value: "cookie value" }
  try {
    const response = await Axios.get("/api/users", {
      headers: {
        Authorization: `Bearer ${ck?.value}`,
      },
    });
    return { status: true, response: response.data };
  } catch (error) {
    console.error(
      "Error fetching data:",
      error.response ? error.response.data : error.message
    );
    return {
      status: false,
      response: error.response ? error.response.data : error.message,
    };
  }
};

export default { getExampleOne, getExample2 };
