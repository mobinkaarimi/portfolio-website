import TextInput from "@components/common/TextInput/TextInput";
import { useFormik } from "formik";
import { useState } from "react";

export default function ContactMe() {
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      name: "",
      email: "",
      content: "",
      file: [],
    },
    onSubmit: (values) => {
      setLoading(true);
      console.log(values);
      // api.AddApiList(data)
      // .then(res => {
      //   changeStatus({id: null, open: false,ipList: null,username: null})
      // })
      // .catch(err => {
      //   console.log(err)
      // })
      // .finally(()=> {
      //   setLoading(false)
      // })
    },
  });

  return (
    <section className="min-h-screen my-10">
      <form onSubmit={formik.handleSubmit} className="flex flex-col space-y-6">
        <div className="flex flex-row items-center w-full space-x-3">
          <TextInput
            WFull
            placeholder={"Your Name"}
            id="name"
            name="name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched?.name && Boolean(formik.errors?.name)}
            errorText={formik.touched?.name ? formik.errors?.name : null}
          />
          <TextInput
            WFull
            placeholder={"Your Email"}
            id="email"
            name="email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched?.email && Boolean(formik.errors?.email)}
            errorText={formik.touched?.email ? formik.errors?.email : null}
          />
        </div>
        <TextInput
          textArea
          WFull
          placeholder={"Your topic"}
          id="content"
          name="content"
          type="content"
          value={formik.values.content}
          onChange={formik.handleChange}
          error={formik.touched?.content && Boolean(formik.errors?.content)}
          errorText={formik.touched?.content ? formik.errors?.content : null}
          className="px-2 py-3"
        />
        <button
          type="submit"
          className={`text-19 font-medium flex justify-center
      items-center space-x-2 space-x-reverse
      text-white bg-palette-blue-800 rounded-lg lg:min-h-16 `}
        >
          {/* {textIcon && !loading ? <img src={textIcon} /> : null} */}
          asdf
          {/* {loading ? (
        <img src={loadingIcon} className="animate-spin" />
      ) : (
        <p>{text || "ورود"}</p>
      )} */}
        </button>
      </form>
     
    </section>
  );
}
