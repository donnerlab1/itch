import { Dispatch } from "common/types";
import React, { useEffect, useState } from "react";
import { hook } from "renderer/hocs/hook";
import { withTab } from "renderer/hocs/withTab";
import { MeatProps } from "renderer/scenes/HubScene/Meats/types";
import styled, * as styles from "renderer/styles";
import {
  GetBalanceRequest,
  GetConnectionRequest,
  LncliRequest,
} from "../../../static/generated/daemon/daemon_pb";
import { DaemonServiceClient } from "../../../static/generated/daemon/daemon_grpc_pb";
import { credentials } from "@grpc/grpc-js";

const DonnerDaemonDiv = styled.div`
  ${styles.meat};
`;

const DonnerDaemonContentDiv = styled.div`
  overflow-y: auto;
  padding: 0px 20px 30px 20px;
  font-size: 20px;

  color: ${props => props.theme.baseText};

  .heading,
  h2 {
    font-size: 18px;
  }

  h2 {
    padding: 10px 15px;
    margin-top: 20px;
    margin-bottom: 5px;
    flex-shrink: 0;
  }

  .icon.turner {
    display: inline-block;
    width: 15px;
    text-align: center;
    transform: rotateZ(0deg);
    transition: transform 0.2s ease-in-out;

    &.turned {
      transform: rotateZ(90deg);
    }
  }

  .preferences-form {
    z-index: 5;
  }

  .advanced-form {
    .section {
      margin: 8px 0;

      &.component {
        margin-left: 16px;
      }

      &:first-child {
        margin-top: 0;
      }
    }

    .button:hover {
      cursor: pointer;
    }
  }

  .explanation {
    padding: 0 15px;
    margin: 15px 0 0 0;

    color: #b9b9b9;
    font-size: 14px;
    max-width: 500px;
    border-radius: $explanation-border-radius;
    line-height: 1.6;

    &.drop-down {
      animation: soft-drop 0.8s;
    }

    &.flex {
      display: flex;
      flex-shrink: 0;

      a,
      .link {
        margin-left: 8px;
        display: flex;
      }
    }

    a,
    .link {
      text-decoration: underline;
      color: #ececec;

      &:hover {
        cursor: pointer;
      }
    }
  }

  .link-box {
    margin: 20px 15px;
    font-size: 80%;

    .icon {
      margin-right: 8px;
    }

    a {
      color: #87a7c3;
      text-decoration: none;
    }
  }
`;

type DaemonState = {
  cmd: string;
  balance: number;
};

const DonnerDaemonPage = (props: Props) => {
  const [daemonState, setDaemonState] = useState<DaemonState>({
    cmd: "",
    balance: 0,
  });

  const client = new DaemonServiceClient(
    "localhost:10101",
    credentials.createInsecure()
  );
  const balanceRequest = () => {
    console.log("making missing balanace request");
    client.getConnection(new GetConnectionRequest(), (e, response) => {
      console.log(response);
      if (e) {
        console.log(e);
        return;
      }
      console.log(response);
      //setDaemonState({ cmd: "", balance: response.getChannelMissingBalance() });
      console.log(response);
      return;
    });
  };

  const lncli = arg => {
    console.log("making lncli request " + arg);
    const req = new LncliRequest();
    req.setCommand(arg);
    client.lncli(req, (e, response) => {
      if (e) {
        console.log(e);
        return;
      }
      console.log(response);
    });
  };

  useEffect(() => {
    console.log("mounted");
    balanceRequest();
    return () => {
      console.log("unmounted");
    };
  }, []);

  const handleInputChange = (e: any) => {
    const target = e.currentTarget;
    setDaemonState(prevState => ({ ...prevState, cmd: target.value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    lncli("getinfo");
    balanceRequest();
  };

  return (
    <DonnerDaemonDiv>
      <DonnerDaemonContentDiv>
        <h1>Hello</h1>
        <input
          type="text"
          onChange={handleInputChange}
          value={daemonState.cmd}
        />
        <button onClick={handleSubmit}>Submit</button>
        {daemonState.balance}
      </DonnerDaemonContentDiv>
    </DonnerDaemonDiv>
  );
};

interface Props extends MeatProps {
  tab: string;
  dispatch: Dispatch;
}

export default hook()(withTab(DonnerDaemonPage));
