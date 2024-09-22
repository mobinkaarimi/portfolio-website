import api from "@services/api";
import TextInput from "@components/common/TextInput/TextInput";
import { useFormik } from "formik";
import { useState } from "react";
import npmLogo from "@assets/icons/npm.svg";
import githubLogo from "@assets/icons/GitHub_Logo.svg";
import codePenLogo from "@assets/icons/CodePen_logo.svg";
import LinkedinLogo from "@assets/icons/Linkedin_logo.svg";
import instagramLogo from "@assets/icons/instagram-logo.svg";
import gmailLogo from "@assets/icons/gmail-logo.svg";
import phoneIcon from "@assets/icons/phone-icon.svg";
import telegramLogo from "@assets/icons/telegram-logo.svg";
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
      // let data = {
      //   name: values.name,
      //   email: values.email,
      //   content: values,
      // };
      const myHeaders = new Headers();
      myHeaders.append(
        "Cookie",
        "connect.sid=s%3A_htIygpG6jAUNeI7yfQecuZPKpTJCWxE.E4dAF79glPdy%2BLGhjYIsbnLqM%2FkN94%2BNwt6zrRZmYI4",
      );

      const formdata = new FormData();
      formdata.append("name", "asdfasdf");
      formdata.append("email", "asfasf@gmail.com");
      formdata.append("content", "asdfasdfasdfasfasdf");
      // formdata.append("file", [], "۲.jpg");

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: formdata,
        redirect: "follow",
      };

      fetch(
        "https://mobin-karimi-portfolio.chbk.run/api/v1/contact",
        requestOptions,
      )
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
      // api
      //   .submitContactForm(values)
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.log(err);
      //   });
    },
  });
  return (
    <section className="flex flex-col space-y-3 " id="contact-me">
      <div className="flex justify-center my-10">
        <h1 className="text-center pb-3 text-4xl text-white border-b border-b-palette-primary-yellow w-max">
          Contact Me
        </h1>
      </div>
      <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row items-start md:space-x-6">
        <div className="w-full flex flex-col space-y-6">
          <span className="text-white">
            Feel free to reach out for more information or any queries regarding
            my roles in these projects. I look forward to discussing how my
            experience aligns with your requirements.
          </span>
          <div className="flex flex-col space-y-2">
            <span className="text-white opacity-90">
              Follow me and discover my source code on:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://www.npmjs.com/~mobinkarimi"
                target="_blank"
                className="rounded-lg border space-x-1 border-gray-500 hover:border-palette-primary-yellow transition-all min-h-14 md:min-h-20 px-4 flex items-center justify-center "
              >
                <img src={npmLogo} className="w-16 h-auto" />
                <span className="text-white">mobinkarimi</span>
              </a>
              <a
                href="https://github.com/mobinkaarimi"
                target="_blank"
                className="rounded-lg border space-x-1 border-gray-500 hover:border-palette-primary-yellow transition-all min-h-14 md:min-h-20 px-4 flex items-center justify-center "
              >
                <img src={githubLogo} className="w-16 h-auto" />
                <span className="text-white">mobinkaarimi</span>
              </a>
              <a
                href="https://codepen.io/mobinkarimi"
                target="_blank"
                className="rounded-lg border space-x-1 border-gray-500 hover:border-palette-primary-yellow transition-all min-h-14 md:min-h-20 px-4 flex items-center justify-center "
              >
                <img src={codePenLogo} className="w-16 h-auto" />
                <span className="text-white">mobinkarimi</span>
              </a>
              <a
                href="https://www.linkedin.com/in/mobin-karimi/"
                target="_blank"
                className="rounded-lg border space-x-1 border-gray-500 hover:border-palette-primary-yellow transition-all min-h-14 md:min-h-20 px-4 flex items-center justify-center "
              >
                <img
                  src={LinkedinLogo}
                  className="w-9 h-auto max-h-6 md:max-h-full"
                />
                <span className="text-white">mobinkarimi</span>
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <span className="text-white opacity-90">
              You can reach me anytime on:
            </span>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://t.me/mobinkaarimi"
                target="_blank"
                className="rounded-lg border space-x-1 border-gray-500 hover:border-palette-primary-yellow transition-all min-h-14 md:min-h-20 px-4 flex items-center justify-center "
              >
                <img src={telegramLogo} className="w-9 h-auto" />
                <span className="text-white">@mobinkaarimi</span>
              </a>
              <a
                href="https://www.instagram.com/mobinkaarimi/"
                target="_blank"
                className="rounded-lg border space-x-1 border-gray-500 hover:border-palette-primary-yellow transition-all min-h-14 md:min-h-20 px-4 flex items-center justify-center "
              >
                <img src={instagramLogo} className="w-9 h-auto" />
                <span className="text-white">mobinkaarimi</span>
              </a>
              <a
                href="mailto:mobinkaarimi@gmail.com"
                target="_blank"
                className="rounded-lg border space-x-1 border-gray-500 hover:border-palette-primary-yellow transition-all min-h-14 md:min-h-20 px-4 flex items-center justify-center "
              >
                <img src={gmailLogo} className="w-9 h-auto" />
                <span className="text-white">mobinkaarimi@gmail.com</span>
              </a>
              <a
                href="tel:+989199837873"
                target="_blank"
                className="rounded-lg border space-x-1 border-gray-500 hover:border-palette-primary-yellow transition-all min-h-14 md:min-h-20 px-4 flex items-center justify-center "
              >
                <img
                  src={phoneIcon}
                  className="w-9 h-auto max-h-6 md:max-h-full"
                />
                <span className="text-white">+989199837873</span>
              </a>
            </div>
          </div>
        </div>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col space-y-6 w-full"
        >
          <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row items-center w-full md:space-x-3">
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
            textAreaLine={15}
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
          text-white bg-palette-primary-yellow rounded-lg min-h-12 lg:min-h-16`}
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
