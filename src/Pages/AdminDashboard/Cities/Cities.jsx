import { useForm } from "react-hook-form";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

function Cities() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>

      <div className="mt-1 ">
        <div className="text-right">
          {/* Button to open the modal */}
          <button
            className="btn bg-orange-400"
            onClick={() => document.getElementById("my_modal_").showModal()}
          >
            Add City
          </button>

          {/* Modal dialog for adding a restaurant */}
          <dialog id="my_modal_" className="modal">
            <div className="modal-box">
              {/* Form starts here */}
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">City Name</span>
                    </label>
                    <input
                      {...register("name", { required: true })}
                      type="text"
                      placeholder="Restaurant Name"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Location</span>
                    </label>
                    <input
                      {...register("location", { required: true })}
                      type="text"
                      placeholder="Location"
                      className="input input-bordered"
                      required
                    />
                  </div>

                  <div className="flex gap-4 mt-6">
                    <button className="btn px-4 btn-primary" type="submit">
                      Submit
                    </button>

                    <button
                      className="btn bg-red-600 text-white"
                      type="button"
                      onClick={() =>
                        document.getElementById("my_modal_").close()
                      }
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
              {/* Form ends here */}
            </div>
          </dialog>
        </div>
        <div className="overflow-x-auto ">
          <table className="table ">
            {/* head */}
            <thead>
              <tr className="text-white hover:text-black hover:bg-white">
                <th>Sl. No.</th>
                <th>Name</th>
                <th>Region</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr className="hover:text-black hover:bg-white">
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td className="flex gap-2">
                  <RiDeleteBin6Line className="border cursor-pointer border-white p-1 text-2xl rounded-md" />
                  <FaRegEdit className="border cursor-pointer border-white p-1 text-2xl rounded-md" onClick={() => document.getElementById('my_modal_3').showModal()} />
                  <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                      <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                      </form>
                      <h3 className="font-bold text-lg text-center">Update City</h3>
                      <form action="">
                        <div className="py-2">
                          <p>Name</p>
                          <input type="text" name="name" className="border border-black w-full" />
                        </div>
                        <div className="py-2">
                          <p>Regions</p>
                          <input type="text" name="region" className="border border-black w-full" />
                        </div>
                        <div className="text-right pt-2">
                          <button className="bg-[#265582] text-white rounded-md p-2">Update</button>
                        </div>
                      </form>
                    </div>
                  </dialog>
                </td>
              </tr>
              {/* row 2 */}
              <tr className="hover:text-black hover:bg-white">
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td className="flex gap-2">
                  <RiDeleteBin6Line className="border border-white p-1 text-2xl rounded-md" />
                  <FaRegEdit className="border border-white p-1 text-2xl rounded-md" />
                </td>
              </tr>
              {/* row 3 */}
              <tr className="hover:text-black hover:bg-white">
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td className="flex gap-2">
                  <RiDeleteBin6Line className="border border-white p-1 text-2xl rounded-md" />
                  <FaRegEdit className="border border-white p-1 text-2xl rounded-md" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Cities