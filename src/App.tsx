import "./styles.css";
import { useState } from "react";
import { initialTabs as tabs } from "./ingredients";
import { startLayoutTransition } from "./start-layout-transition";

export default function App() {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div className="window">
      <nav>
        <ul>
          {tabs.map((item) => (
            <li
              key={item.label}
              className={item === selectedTab ? "selected" : ""}
              onClick={startLayoutTransition(() => setSelectedTab(item))}
            >
              {`${item.icon} ${item.label}`}
              {item === selectedTab ? (
                <div
                  className="underline"
                  style={
                    { contain: "paint", pageTransitionTag: "underline" } as any
                  }
                />
              ) : null}
            </li>
          ))}
        </ul>
      </nav>
      <main>
        <div
          key={selectedTab ? selectedTab.label : "empty"}
          style={{ contain: "paint", pageTransitionTag: "content" } as any}
        >
          {selectedTab ? selectedTab.icon : "😋"}
        </div>
      </main>
    </div>
  );
}
