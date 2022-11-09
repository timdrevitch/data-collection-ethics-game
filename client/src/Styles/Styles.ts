import styled, { keyframes } from "styled-components"
import { Link } from "react-router-dom"

//Animations
const shine = keyframes`
    0% {box-shadow: 1px 0 25px 2px white}
    50% {box-shadow: 1px -4px 25px 2px white}
    100% {box-shadow: 1px 0 25px 2px white}
`
const blink = keyframes`
    0% {opacity: 100%}
    50% {opacity: 0%}
    100% {opacity: 100%}
`
const shakeAnimation = keyframes`
    0% {transform: translate(1px, 1px) rotate(0deg)}
    10% {transform: translate(-1px, -2px) rotate(-1deg)}
    20% {transform: translate(-3px, 0px) rotate(1deg)}
    30% {transform: translate(3px, 2px) rotate(0deg)}
    40% {transform: translate(1px, -1px) rotate(1deg)}
    50% {transform: translate(-1px, 2px) rotate(-1deg)}
    60% {transform: translate(-3px, 1px) rotate(0deg)}
    70% {transform: translate(3px, 1px) rotate(-1deg)}
    80% {transform: translate(-1px, -1px) rotate(1deg)}
    90% {transform: translate(1px, 2px) rotate(0deg)}
    100% {transform: translate(1px, -2px) rotate(-1deg)}
`

//nav bar
export const NavigationLink = styled(Link)`
  border: 1px solid darkgreen;
  background: linear-gradient(180deg, #ffffff 0%, #c6d1ba 44%, #788a78 100%);
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 15px 10px 0 10px;
  margin-left: 2%;
  color: darkgreen;
  text-decoration: none;
  font-family: Trebuchet MS, sans-serif;
  transition: all 0.5s ease-in-out;
  animation: ${shine} 3s infinite 0s;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #fff;
    color: green;
    padding-top: 40px;
    border: 1px solid green;
  }
`
export const NavigationLinkContainer = styled.div`
  width: 35%;
  display: inline-block;
  text-align: center;
`
export const NavigationHeader = styled.header`
  overflow: hidden;
  background: black;
  box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.4), 0 7px 20px 0 rgba(0, 0, 0, 0.4);
  font-family: Trebuchet MS, sans-serif;
`
export const NavigationContainer = styled.div`
  width: 95%;
  margin: auto;
`
export const NavigationImageContainer = styled.div`
  width: 9rem;
  display: inline-block;
`
export const NavigationImage = styled.img`
  width: 100%;
  height: 2.3rem;
  margin: 1rem 0;
  display: inline;
  vertical-align: center;
`
export const NavigationImageCentered = styled.img`
  width: 12rem;
  height: 3rem;
  margin: 1rem auto;
  display: block;
  text-align: center;
`
export const NavigationUserContainer = styled.div`
  display: inline;
  float: right;
`
export const NavigationUL = styled.ul`
  display: inline-block;
  text-align: right;
`
export const NavigationLI = styled.li`
  display: inline-block;
  color: white;
`
export const NavigationUserImageContainer = styled.div`
  display: inline-block;
  margin: auto 0.5rem;
  width: 2rem;
  height: 2rem;
  overflow: hidden;
  border-radius: 50%;
  box-shadow: 0px 0px 150px 60px rgba(237, 245, 243, 0.788);
`
export const NavigationUserImg = styled.img`
  width: 2rem;
  height: 2rem;
`
export const NormalTH = styled.th`
  border-bottom: 1px solid;
  background: linear-gradient(135deg, #eeeeee 0%, #cccccc 100%);
`

//Expense Reports Page
export const LeftTH = styled.th`
  text-align: left;
`
export const RightTH = styled.th`
  text-align: right;
`
export const CenterTH = styled.th`
  text-align: center;
`
export const TopWidget = styled.div`
  background: white;
  margin: 3rem auto 0 auto;
  width: 50%;
  text-align: center;
  padding: 5px;
  border-radius: 10px;
  box-shadow: 0px 0px 20px 1px rgba(237, 245, 243, 0.788);
`
export const ReportsWidget = styled.div`
  background: white;
  width: 95%;
  margin: 2rem auto 2rem auto;
  text-align: center;
  overflow: hidden;
  padding-top: 1rem;
  padding-bottom: 2rem;
  box-shadow: 0px 0px 20px 1px rgba(237, 245, 243, 0.788);
`
export const GrayTd = styled.td`
  background: lightgray;
  white-space: nowrap;
`
export const WhiteTd = styled.td`
  background: white;
  white-space: nowrap;
`
export const ExpenseTable = styled.table`
  width: 98%;
  margin: auto;
`

export const NormalTD = styled.td`
  border-bottom: 1px solid #ddd;
`
export const TestingTD = styled.td`
  border-bottom: 1px solid #ddd;
  color: orange;
`
export const MissingInfoTD = styled.td`
  border-bottom: 1px solid #ddd;
  color: red;
`
export const TicketItem = styled.div`
  padding: 10px;
`

export const CreateOrderButton = styled.button`
  border: 1px solid skyblue;
  color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 50px 5px rgba(237, 245, 243, 0.4);
  width: 12rem;
  text-align: center;
  background: linear-gradient(135deg, #b2e1ff 0%, #66b6fc 100%);
  padding: 0.8rem;
  margin: 0 10px 0 0;
  cursor: pointer;
  overflow: hidden;
  font-family: Trebuchet MS, sans-serif;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #fff;
    color: skyblue;
    border: 1px solid skyblue;
    width: 36rem;
    height: 12rem;
  }
`

export const ViewArchivesButton = styled.button`
  border: 1px solid green;
  color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 50px 5px rgba(237, 245, 243, 0.4);
  width: 12rem;
  text-align: center;
  background: linear-gradient(135deg, #c9de96 0%, #8ab66b 44%, #398235 100%);
  padding: 0.8rem;
  margin: 0 10px 0 10px;
  cursor: pointer;
  overflow: hidden;
  font-family: Trebuchet MS, sans-serif;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #fff;
    color: green;
    border: 1px solid green;
    width: 36rem;
    height: 12rem;
  }
`

export const AnalyticsHover = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  border: 1px solid green;
  color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 50px 5px rgba(237, 245, 243, 0.4);
  width: 12rem;
  text-align: center;
  background: linear-gradient(135deg, #c9de96 0%, #8ab66b 44%, #398235 100%);
  padding: 0.8rem;
  margin: 0 10px 0 10px;
  font-family: Trebuchet MS, sans-serif;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #fff;
    color: green;
    border: 1px solid green;
    width: 36rem;
    height: 10.3rem;
  }
`

export const ViewStatsButton = styled.button`
  color: white;
  font-family: Trebuchet MS, sans-serif;
  cursor: pointer;
  margin-top: 5px;
  width: 43.5%;
  float: right;
  padding: 10px;
  border: 1px solid pink;
  border-radius: 5px;
  background: linear-gradient(135deg, #f6e6b4 0%, #ed9017 72%, #ed9017 72%);
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #fff;
    color: orange;
    border: 1px solid orange;
  }
`

export const BulkActionButton = styled.button`
  border: 1px solid green;
  color: white;
  border-radius: 5px;
  box-shadow: 0px 0px 50px 5px rgba(237, 245, 243, 0.4);
  width: 12rem;
  text-align: center;
  background: linear-gradient(135deg, #c9de96 0%, #8ab66b 44%, #398235 100%);
  padding: 0.8rem;
  margin: 0 10px 0 10px;
  cursor: pointer;
  overflow: hidden;
  font-family: Trebuchet MS, sans-serif;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #fff;
    color: green;
    border: 1px solid green;
    width: 36rem;
    height: 12rem;
  }
`

export const ActionsSection = styled.div`
  display: flex;
  width: 60%;
  height: 3rem;
  margin: 10px auto;
  text-align: center;
  justify-content: center;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    color: green;
    height: 12rem;
    width: 80%;
  }
`

export const ArchiveButton = styled.button`
  border: 1px solid white;
  background: linear-gradient(135deg, #c9de96 0%, #8ab66b 44%, #398235 100%);
  color: white;
  border-radius: 5px;
  padding: 10px;
  font-size: 10px;
  cursor: pointer;
  font-family: Trebuchet MS, sans-serif;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #fff;
    color: green;
    border: 1px solid green;
  }
`

export const UndenyButton = styled.button`
  border: 1px solid white;
  background: linear-gradient(135deg, #a83f56 0%, #8f0222 51%, #59000e 100%);
  color: white;
  border-radius: 5px;
  padding: 10px;
  font-size: 10px;
  cursor: pointer;
  font-family: Trebuchet MS, sans-serif;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #fff;
    color: red;
    border: 1px solid red;
  }
`

export const ReceiveButton = styled.button`
  border: 1px solid white;
  background: linear-gradient(135deg, #b2e1ff 0%, #66b6fc 100%);
  color: white;
  border-radius: 5px;
  padding: 10px;
  font-size: 10px;
  cursor: pointer;
  font-family: Trebuchet MS, sans-serif;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #fff;
    color: darkcyan;
    border: 1px solid darkcyan;
  }
`

export const DeliverButton = styled.button`
  border: 1px solid white;
  background: linear-gradient(
    135deg,
    #9eb2d1 0%,
    #375d89 38%,
    #375d89 74%,
    #0a4487 100%
  );
  color: white;
  border-radius: 5px;
  padding: 10px;
  font-size: 10px;
  cursor: pointer;
  font-family: Trebuchet MS, sans-serif;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #fff;
    color: darkblue;
    border: 1px solid darkblue;
  }
`

export const ViewLink = styled(Link)`
  border: 1px solid white;
  background: linear-gradient(135deg, #f6e6b4 0%, #ed9017 72%, #ed9017 72%);
  color: white;
  border-radius: 5px;
  padding: 10px;
  font-size: 10px;
  text-decoration: none;
  cursor: pointer;
  font-family: Trebuchet MS, sans-serif;
  transition: all 0.5s ease-in-out;

  &:hover {
    transition: all 0.5s ease-in-out;
    background: #fff;
    color: orange;
    border: 1px solid orange;
  }
`

//Loading
export const LoadingContainer = styled.div`
  border: 1px solid white;
  width: 30%;
  min-width: 300px;
  text-align: center;
  margin: 3rem auto 5rem auto;
  border-radius: 10px;
  padding-top: 30px;
  padding-bottom: 20px;
  background: black;
  overflow: hidden;
`
export const Loading = styled.h3`
  color: #5fc75d;
  animation: ${blink} 1s infinite;
`

//Create Form
export const FormLabel = styled.div`
  box-shadow: 0px 0px 100px 1px rgb(237, 245, 243);
  color: white;
  border: 1px solid black;
  background: linear-gradient(135deg, #697c35 0%, #365c1c 44%, #041603 100%);
  border-top-right-radius: 100%;
  border-top-left-radius: 5px;
  width: 90%;
  text-align: left;
  margin: 2rem auto 0 auto;
`
export const BackButtonContainer = styled.div`
  width: 90%;
  text-align: left;
  margin: 2rem auto 0 auto;
`
export const FormInput = styled.input`
  background: linear-gradient(135deg, #ffffff 0%, #e5e6e4 44%, #939e93 100%);
  padding: 0;
  border-width: 0;
  height: 4rem;
  width: 90%;
  margin: 0 auto;
  font-family: Trebuchet MS, sans-serif;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
`
export const FormSubmit = styled.input`
  box-shadow: 0px 0px 100px 1px rgba(237, 245, 243, 0.582);
  color: white;
  cursor: pointer;
  background: linear-gradient(135deg, #92a855 0%, #4b7a2c 44%, #11420f 100%);
  border-radius: 3px;
  border: 1px solid black;
  height: 5rem;
  width: 90%;
  margin: 2.5rem auto 1rem auto;
  font-size: 1rem;
  font-family: Trebuchet MS, sans-serif;
  transition: all 0.5s ease-in-out;
  &:hover {
    background: white;
    color: green;
    transition: all 0.3s ease-in-out;
    animation: ${shakeAnimation} 1s 1;
  }
`
