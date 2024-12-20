import React from "react";

export default function Footer() {
  return (
    <footer className="w-full py-6 border-t absolute bottom-0">
      <div className="max-w-7xl mx-auto px-4">
        <div>
          <h3 className="text-lg font-semibold mb-2">聯絡資訊</h3>
          <ul>
            <li className="mb-2">電話: 04-23221545</li>
            <li className="mb-2">住址: 台中市西區華美西街一段50號</li>
            <li className="mb-2">
              信箱:{" "}
              <a
                href="mailto:forevergood61@gmail.com"
                className="text-blue-400 hover:underline"
              >
                forevergood61@gmail.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
