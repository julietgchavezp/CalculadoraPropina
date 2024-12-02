import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import OneAccount from "./components/OneAccount";
import MultipleAccounts from "./components/MultipleAccounts";


const tab = createBottomTabNavigator();

export default function app(){
  return(
    <NavigationContainer>
      <Tab.navigator
      name="OneAccount"
        components={OneAccount}
        options={{title:"Una cuenta"}}
      />
       <Tab.navigator
      name="MultipleAccopunts"
      components={MultipleAccounts}
      options={{title:"Multiples cuenta"}}
      />
    </NavigationContainer>    
  );
}