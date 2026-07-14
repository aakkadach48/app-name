import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout(){
    return(
    <Tabs screenOptions={{tabBarActiveTintColor:'#303bceff'}}>
    <Tabs.Screen
        name="index"
        options={{
            title:'หน้าแรก',
            tabBarIcon:({color})=><Ionicons name="home" size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
            title:'เกี่ยวกับ',
            tabBarIcon:({color})=><Ionicons name="chatbox-ellipses-outline" size={24} color={color}/>,
        }}
      />
       <Tabs.Screen
        name="detail"
        options={{
            title:'ข้อมูลต่างๆ',
            tabBarIcon:({color})=><Ionicons name="information-circle-outline" size={24} color={color}/>,
        }}
      />
    </Tabs>
  );
}