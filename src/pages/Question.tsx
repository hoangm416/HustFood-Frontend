import { useState } from 'react';

const Question = () => {
    const [activeTab, setActiveTab] = useState('personal'); // Default active tab

    const tabs = [
        { id: 'personal', label: 'Khách hàng' },
        { id: 'payment', label: 'Thanh toán' },
        { id: 'voucher', label: 'Khuyến mãi' },
        { id: 'partner', label: 'Đăng ký làm đối tác' },
        { id: 'driver', label: 'Tài xế' },
    ];

    const questions = [
        'Khi nào tôi có thể hủy đơn hàng?',
        'Làm thế nào để tạo tài khoản HustFood?',
        'Tôi muốn thêm/ thay đổi phương thức thanh toán?',
        'Trong tương lai có thêm voucher không?',
        'Đăng ký làm tài xế HustFood như thế nào?'
    ];

    return (
        <div className="container mx-auto py-8">
            {/* Tabs */}
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`py-2 px-4 rounded-md font-medium ${activeTab === tab.id
                            ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white'
                            : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Questions */}
            <div className="bg-white shadow-md rounded-lg p-6">
                {questions.map((question, index) => (
                    <div
                        key={index}
                        className="border-b last:border-none py-4 flex items-center justify-between"
                    >
                        <p className="text-lg font-medium text-gray-800">{question}</p>
                        <button className="text-blue-500 font-bold text-xl">+</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Question;
