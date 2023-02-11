import React from "react";
import "./Content.css";
import tempImg from "../../imgs/obj.png";
const Content = () => {
  return (
    <div className="content" id="content">
      <div className="objectiveWrapper">
        <h1>Objectives</h1>
        <div className="objective">
          <div className="objectiveText">
            <p>
              The objective is to build An electronic health record (EHR)
              contains highly sensitive and critical data related to patients
              that is shared among multiple facilities and agencies for
              effective diagnosis and treatment.
            </p>
          </div>
          <div className="objective_img">
            <img src={tempImg} alt="" />
          </div>
        </div>
      </div>
      {/* <div className="existing_work_wrapper">
            <div className="existing_work">
                <h1>Existing Work</h1>
                <p>The objective is to build Masked Face Recognition model using existing Face Recognition algorithms and accurately recognise faces from both IMAGE, VIDEO and live CCTV footage.</p>
            </div>
        </div> */}

      <div className="wrapper">
        <h1>Existing Work</h1>
        <div className="existing_work">
          <div className="existing_work_text">
            <p>
              <span style={{ color: "var(--green)" }}>Dataset : </span> One
              dataset has ~13,000 aligned and labeled images of faces collected
              from the web. The images are organized into 5749 folders with each
              folder corresponding to a person and their original dimensions are
              250 x 250 pixels. <br />
              Second dataset used is Simulated Masked Face Recognition Dataset.
              This dataset has been created by a simulation mask-wearing
              application.
              <br />
              <br />
              <span style={{ color: "var(--green)" }}>Model</span> <br />
              <span style={{ color: "var(--green)", marginTop: "0.8rem" }}>
                1.ResNet50 ResNet V1 Architecture :{" "}
              </span>
              The ResNet-50 model consists of 5 stages each with a convolution
              and identity block. Each convolution block has 3 convolution
              layers, and each identity block also has 3 convolution layers. The
              ResNet-50 has over 23 million trainable parameters. This model has
              3.8 billion FLOP's. <br />
              <span style={{ color: "var(--green)", marginTop: "0.8rem" }}>
                2. ResNet V1 Architecture :{" "}
              </span>{" "}
              The ResNet-50 model consists of 5 stages each with a convolution
              and identity block. Each convolution block has 3 convolution
              layers, and each identity block also has 3 convolution layers. The
              ResNet-50 has over 23 million trainable parameters. This model has
              3.8 billion FLOP
            </p>
          </div>
          <div className="existing_img">
            <img src={tempImg} alt="" />
          </div>
        </div>
      </div>
      <div className="wrapper">
        <h1>Current Technology Gap </h1>
        <div className="tech_gap">
          <div className="tech_text">
            <p>
              {" "}
              There are several current gaps in the technology of mask face
              recognition: <br />
              <span style={{ color: "var(--green)" }}> Accuracy: </span> The
              current models have varying levels of accuracy, with some having
              difficulty in recognizing masks and faces accurately, especially
              under challenging conditions such as low lighting or when the mask
              covers a significant portion of the face.
              <br />
              <span style={{ color: "var(--green)" }}> Diversity: </span> There
              is a lack of diversity in the training data used to develop these
              models, which can lead to biased results and poor performance on
              faces of different races, ages, and genders.
              <br />
              <span style={{ color: "var(--green)" }}>
                {" "}
                Real-time Performance:{" "}
              </span>{" "}
              The processing speed of some models is slow, which may not be
              suitable for real-time use in high-traffic areas such as airports
              or train stations.
              <br />
              <span style={{ color: "var(--green)" }}> Cost: </span> Some face
              recognition systems can be expensive, making it difficult for
              small businesses or organizations to implement them.
              <br />
              <span style={{ color: "var(--green)" }}>
                {" "}
                Interoperability:{" "}
              </span>{" "}
              There is a lack of standardization in the technology, which makes
              it difficult for different systems to work together seamlessly.
              <br />
              <br />
              <span style={{ color: "var(--green)" }}>
                Missing of Facial Features
              </span>{" "}
              <br />
              <span style={{ color: "var(--green)", marginTop: "0.8rem" }}>
                {" "}
                --{" "}
              </span>{" "}
              The NOSE, JAW LINE, MOUTH is used for determining the center of
              the face and for identifying the overall shape of the face. <br />
              <span style={{ color: "var(--green)", marginTop: "0.8rem" }}>
                {" "}
                --{" "}
              </span>{" "}
              The NOSE is used for detection of center of the face. <br />
              <span style={{ color: "var(--green)", marginTop: "0.8rem" }}>
                {" "}
                --{" "}
              </span>{" "}
              The cheekbones are used for identifying the overall shape of the
              face and for determining the prominence of the cheekbones.
            </p>
          </div>
          <div className="tech_img">
            <img src={tempImg} alt="" />
          </div>
        </div>
      </div>

      <div className="wrapper">
        <h1> Methodology </h1>
        <div className="methodology">
          <div className="methodology_text">
            <p>
              {" "}
              There are several current gaps in the technology of mask face
              recognition: <br />
              <span style={{ color: "var(--green)" }}>
                {" "}
                Auto Translation :{" "}
              </span>{" "}
              No longer will you have to learn a foreign language to communicate
              with others Presentations are communication tools that can be used
              as demonstrations, lectures, speeches, reports, and more. It is
              mostly presented before an audience.
              <br />
              <span style={{ color: "var(--green)" }}> -- </span> Date set
              preparation
              <br />
              <span style={{ color: "var(--green)" }}>
                {" "}
                Model Traning:{" "}
              </span>{" "}
              <br /> <span style={{ color: "var(--green)" }}>1.</span> Retrain
              the existing Facenet models with weights for our dataset of
              unmasked and masked images optimizing for triplet loss.
              <br /> <span style={{ color: "var(--green)" }}>2.</span> Produce
              embeddings from retrained model for Train/ Validation/Test sets
              and calculate accuracy using K-Nearest Neighbors (KNN) as
              classifier for face recognition.
              <br />
              <span style={{ color: "var(--green)" }}>3.</span> We used Labeled
              Faces in the Wild and Simulated Masked Face Recognition Datasets.
              <br />
              <br />
              <br />
              <span style={{ color: "var(--green)" }}>
                Missing of Facial Features
              </span>{" "}
              <br />
              <span style={{ color: "var(--green)", marginTop: "0.8rem" }}>
                {" "}
                --{" "}
              </span>{" "}
              The NOSE, JAW LINE, MOUTH is used for determining the center of
              the face and for identifying the overall shape of the face. <br />
              <span style={{ color: "var(--green)", marginTop: "0.8rem" }}>
                {" "}
                --{" "}
              </span>{" "}
              The NOSE is used for detection of center of the face. <br />
              <span style={{ color: "var(--green)", marginTop: "0.8rem" }}>
                {" "}
                --{" "}
              </span>{" "}
              The cheekbones are used for identifying the overall shape of the
              face and for determining the prominence of the cheekbones.
            </p>
          </div>
          <div className="methodology_img">
            <img src={tempImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
