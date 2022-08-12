import React from "react";
import styled from "styled-components";

const BasicModalForm = (props) => {
  const { open, close, header } = props;

  return (
    <Wrap>
      <div className={open ? 'openModal modal' : 'modal'}>
        {open ? (
          <section>
            <header>
              {header}
              <button className="close" onClick={close}>
                &times;
              </button>
            </header>
            <main>{props.children}</main>
          </section>
        ) : null}
      </div>
    </Wrap>
  );
}

export default BasicModalForm;

const Wrap = styled.div`
.modal {
  display: none;
  /* top: 0;
  right: 0;
  bottom: 0;
  left: 0; */
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  max-width: 1920px;
  min-width: 800px;
  width: 100%;
  height: 100%;
}
.modal button {
  outline: none;
  cursor: pointer;
  border: 0;
}
.modal > section {
  width: 85%;
  max-width: 450px;
  margin: 0 auto;
  border-radius: 0.3rem;
  background-color: #fff;
  animation: modal-show 0.3s;
  overflow: hidden;
}
.modal > section > header {
  display: flex;
  justify-content: center;
  position: relative;
  padding: 16px 16px 16px 16px;
  background-color: rosybrown;
  color: white;
  font-size: 1.4rem;
  font-weight: 700;
}
.modal > section > header button {
  position: absolute;
  top: 15px;
  right: 15px;
  width: 30px;
  font-size: 21px;
  font-weight: 700;
  text-align: center;
  color: white;
  background-color: transparent;
}

.modal.openModal {
  display: flex;
  align-items:center;
  animation: modal-bg-show 0.3s;
}
@keyframes modal-show {
  from {
    opacity: 0;
    margin-top: -50px;
  }
  to {
    opacity: 1;
    margin-top: 0;
  }
}
@keyframes modal-bg-show {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`;