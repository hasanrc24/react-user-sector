import Multiselect from "multiselect-react-dropdown";
import { Link } from "react-router-dom";
import { useData } from "../context/dataContext";
import { selectors } from "../data/data";
import { useForm } from "react-hook-form";

const Home = () => {
  const { formData, setFormData } = useData();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const savedData = JSON.parse(localStorage.getItem("data"));

  const onSubmit = (e) => {
    localStorage.setItem("data", JSON.stringify(formData));
    setFormData({
      username: "",
      value: [],
      agreement: false,
    });
  };
  return (
    <div className="home-body d-flex justify-content-center align-items-center">
      <div className="content-box shadow p-5 bg-white rounded">
        <h5>
          Please enter your name and pick the Sectors you are currently involved
          in.
        </h5>
        <br />
        <form onSubmit={handleSubmit(onSubmit)} id="form">
          <span className="fw-bold">Name*</span>
          <br />
          <input
            type="text"
            placeholder="Enter your name"
            id="nm"
            className="form-control"
            onChange={(e) =>
              setFormData({ ...formData, username: e.target.value })
            }
            name="name"
            value={formData.username}
            required
          />
          <br />
          <br />
          <label className="fw-bold">Sectors* </label>
          <Multiselect
            displayValue="key"
            groupBy="cat"
            showCheckbox="true"
            options={selectors}
            onSelect={(e) => setFormData({ ...formData, value: e })}
            onRemove={(e) => setFormData({ ...formData, value: e })}
          />
          <br />
          <div className="mb-2">
            <input
              type="checkbox"
              name="agree"
              className="me-1"
              onChange={(e) =>
                setFormData({ ...formData, agreement: e.target.checked })
              }
              {...register("aggreement", {
                required: "Aggreement is required",
              })}
            />
            <span>Agree to terms</span>
            {errors.aggreement && (
              <div className="alert alert-danger" role="alert">
                {errors.aggreement.message}
              </div>
            )}
          </div>
          <input type="submit" value="Save" className="button me-2" />
          {savedData?.value?.length !== 0 && savedData !== null && (
            <Link to="/user" type="button" className="button">
              Show user
            </Link>
          )}
        </form>
      </div>
    </div>
  );
};

export default Home;
