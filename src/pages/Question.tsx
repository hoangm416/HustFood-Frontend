import { useState } from 'react';

const Question = () => {
    const [activeTab, setActiveTab] = useState('personal'); // Default active tab
    const [showAnswer, setShowAnswer] = useState(false)
    const tabs = [
        { id: 'personal', label: 'Khách hàng' },
        { id: 'payment', label: 'Thanh toán' },
        { id: 'voucher', label: 'Khuyến mãi' },
        { id: 'partner', label: 'Đăng ký làm đối tác' },
        { id: 'driver', label: 'Tài xế' },
    ];

    const question = [
        {
            id: 'personal', 
            question: [
                'Khi nào tôi có thể hủy đơn hàng?',
                'Làm thế nào để tạo tài khoản HustFood?',
            ], 
            answer: [
                'Bạn có thể hủy đơn hàng trước khi đơn hàng của bạn được xác nhận hoặc đang trong quá trình vận chuyển. Tuy nhiên, nếu đơn hàng đã được xác nhận và gửi đi, bạn sẽ không thể hủy đơn mà cần phải liên hệ với dịch vụ khách hàng để được hỗ trợ thêm.',
                `Để tạo tài khoản trên HustFood, bạn cần làm theo các bước sau:
                    Bước 1: Truy cập vào trang web hoặc ứng dụng HustFood.
                    Bước 2: Chọn "Đăng ký" hoặc "Tạo tài khoản".
                    Bước 3: Nhập thông tin yêu cầu như tên, email, số điện thoại và mật khẩu.
                    Bước 4: Xác nhận thông tin và hoàn tất việc đăng ký qua email hoặc SMS (nếu có yêu cầu).
                    Bước 5: Sau khi đăng ký xong, bạn có thể đăng nhập và bắt đầu sử dụng dịch vụ.`
            ]
        },
        {
            id: 'payment', 
            question: [
                'HustFood hiện tại có những phương thức thanh toán nào?',
                'Tôi muốn thêm/ thay đổi phương thức thanh toán?'
            ],
            answer: [
                `Hiện tại, HustFood cung cấp các phương thức thanh toán phổ biến sau:
                    Cách 1: Thanh toán qua thẻ tín dụng/ghi nợ: Bạn có thể thanh toán đơn hàng bằng các thẻ tín dụng hoặc thẻ ghi nợ như Visa, MasterCard, hoặc các loại thẻ quốc tế khác.
                    Cách 2: Thanh toán qua ví điện tử: HustFood hỗ trợ thanh toán qua các ví điện tử như MoMo, ZaloPay, hoặc ViettelPay, giúp giao dịch nhanh chóng và thuận tiện.
                    Cách 3: Thanh toán khi nhận hàng (COD): Đây là phương thức thanh toán khi bạn nhận được đơn hàng trực tiếp từ tài xế HustFood. Bạn có thể thanh toán bằng tiền mặt hoặc thẻ tại thời điểm giao hàng.
                    Cách 3: Thanh toán qua chuyển khoản ngân hàng: Nếu bạn có nhu cầu, một số dịch vụ có thể hỗ trợ thanh toán qua chuyển khoản ngân hàng trực tiếp.
                Các phương thức thanh toán có thể thay đổi tùy theo chương trình khuyến mãi hoặc yêu cầu của từng khu vực, vì vậy bạn nên kiểm tra lại trong ứng dụng hoặc trang web của HustFood để biết thông tin mới nhất.`,
                `Vào phần "Cài đặt tài khoản" hoặc "Phương thức thanh toán": 
                    Bước 1: Tìm mục "Thanh toán" hoặc "Cài đặt tài khoản" trong menu của tài khoản cá nhân.
                    Bước 2: Chọn "Thêm phương thức thanh toán" hoặc "Thay đổi phương thức thanh toán": Bạn sẽ thấy các tùy chọn để thêm hoặc thay đổi thông tin thanh toán.
                    Bước 3: Cập nhật thông tin thanh toán: Nhập các chi tiết cần thiết, ví dụ như thẻ tín dụng, thẻ ghi nợ, hoặc phương thức thanh toán khác (ví dụ: ví điện tử).
                    Bước 4: Lưu thay đổi: Sau khi cập nhật thông tin, nhớ lưu lại thay đổi để hoàn tất quá trình.
                Nếu có bất kỳ vấn đề gì trong quá trình thay đổi phương thức thanh toán, bạn có thể liên hệ với dịch vụ khách hàng của HustFood để được hỗ trợ.`
            ]
        },
        {
            id: 'voucher', 
            question: [
                'Voucher có thể sử dụng cho tất cả các đơn hàng không?',
                'Trong tương lai có thêm voucher không?'
            ],
            answer: [
                "Voucher có thể có các điều kiện sử dụng cụ thể, như giá trị đơn hàng tối thiểu, giới hạn cho một số sản phẩm, hoặc chỉ áp dụng cho các đơn hàng trong khu vực nhất định. Bạn nên đọc kỹ điều khoản sử dụng voucher trước khi áp dụng.",
                "Hiện tại, HustFood có thể sẽ phát hành thêm các voucher trong tương lai, tùy thuộc vào các chương trình khuyến mãi hoặc sự kiện đặc biệt. Để không bỏ lỡ các ưu đãi mới, bạn có thể theo dõi thông tin qua các kênh truyền thông chính thức của HustFood như website, ứng dụng, hoặc các email khuyến mãi."
            ]
        },
        {
            id: 'partner', 
            question: [
                'Làm thế nào để đăng ký làm đối tác?',
                'Những đối tượng nào có thể tham gia làm tối tác với HustFood',
            ],
            answer: [
                `Để đăng ký làm đối tác với HustFood, bạn có thể thực hiện các bước sau:
                    Bước 1: Truy cập vào website hoặc ứng dụng HustFood: Tìm mục "Đối tác" hoặc "Trở thành đối tác" trên trang chính.
                    Bước 2: Điền thông tin đăng ký: Nhập thông tin yêu cầu như tên công ty, địa chỉ, thông tin liên hệ, và loại hình dịch vụ/sản phẩm bạn cung cấp.
                    Bước 3: Gửi yêu cầu đăng ký: Sau khi điền thông tin, gửi yêu cầu để đội ngũ HustFood xem xét.
                    Bước 4: Chờ phê duyệt: HustFood sẽ xem xét thông tin và liên hệ với bạn nếu hồ sơ đủ điều kiện để trở thành đối tác.
                Nếu bạn có câu hỏi thêm, có thể liên hệ với bộ phận hỗ trợ đối tác của HustFood để được hướng dẫn chi tiết.`,
                `Các đối tượng có thể tham gia làm đối tác với HustFood bao gồm:
                    1. Nhà hàng, quán ăn: Các nhà hàng, quán ăn, quán cà phê, hay các cơ sở kinh doanh thực phẩm có thể trở thành đối tác cung cấp món ăn, thực phẩm cho dịch vụ giao hàng của HustFood.
                    2. Các cửa hàng bán lẻ: Các cửa hàng bán đồ ăn nhanh, thực phẩm chế biến sẵn, hoặc các sản phẩm tiêu dùng có thể hợp tác với HustFood để cung cấp sản phẩm cho khách hàng.
                    3. Nhà cung cấp thực phẩm: Các nhà cung cấp thực phẩm tươi sống, thực phẩm chế biến sẵn, hay nguyên liệu nấu ăn có thể trở thành đối tác của HustFood trong việc cung cấp nguyên liệu cho các nhà hàng hoặc quán ăn.
                    4. Tài xế giao hàng (Shipper): Những cá nhân hoặc công ty cung cấp dịch vụ giao hàng có thể tham gia làm đối tác tài xế của HustFood, chịu trách nhiệm giao các đơn hàng từ nhà hàng đến khách hàng.
                    5. Những người cung cấp dịch vụ công nghệ: Các đối tác cung cấp dịch vụ công nghệ, ví dụ như các công ty cung cấp phần mềm quản lý đơn hàng, hệ thống thanh toán, hoặc các dịch vụ tích hợp khác có thể hợp tác với HustFood để nâng cao hiệu quả hoạt động.
                    6. Doanh nghiệp nhỏ và vừa (SMEs): Các doanh nghiệp vừa và nhỏ trong ngành thực phẩm, đồ uống, hoặc các ngành liên quan đến giao hàng cũng có thể trở thành đối tác của HustFood, giúp mở rộng mạng lưới dịch vụ.
                    7. Nhà phân phối sản phẩm hoặc dịch vụ khác: Các công ty cung cấp các sản phẩm và dịch vụ có thể tham gia vào các chương trình hợp tác với HustFood để mở rộng thị trường và tiếp cận khách hàng.
                Các đối tác này có thể đăng ký và hợp tác với HustFood thông qua việc đăng ký trên website hoặc ứng dụng, sau đó hoàn tất các thủ tục cần thiết và bắt đầu cung cấp dịch vụ hoặc sản phẩm cho nền tảng.`
            ]
        },
        {
            id: 'driver', 
            question: [
                'Đăng ký làm tài xế HustFood như thế nào?',
                'Để có thể được xét duyệt làm tài xế HustFood cần những điều kiện gì ?'
            ],
            answer: [
                `Để đăng ký làm tài xế cho HustFood, bạn có thể thực hiện theo các bước sau:
                    Bước 1: Truy cập vào website hoặc ứng dụng HustFood: Tìm mục "Tài xế" hoặc "Đăng ký tài khoản tài xế" trên trang chính.
                    Bước 2: Điền thông tin đăng ký: Mở ứng dụng và điền các thông tin yêu cầu như tên, ngày sinh, địa chỉ, số điện thoại, thông tin xe (nếu có), và các thông tin cá nhân khác.
                    Bước 3: Cung cấp giấy tờ cần thiết: Bạn sẽ cần tải lên các giấy tờ như giấy phép lái xe, CMND/CCCD, và các giấy tờ liên quan đến xe (nếu làm tài xế xe máy hoặc ô tô).
                    Bước 4: Chờ phê duyệt: Sau khi hoàn tất các bước đăng ký, đội ngũ HustFood sẽ xem xét hồ sơ của bạn. Nếu đủ điều kiện, bạn sẽ nhận được thông báo chấp nhận và có thể bắt đầu nhận đơn.
                Sau khi hoàn tất, bạn có thể bắt đầu nhận đơn hàng và giao hàng cho khách hàng của HustFood.`,
                `Để được xét duyệt làm tài xế cho HustFood, bạn cần đáp ứng các điều kiện cơ bản sau:
                    1. Giấy phép lái xe hợp lệ: Bạn cần có giấy phép lái xe hợp lệ và đủ điều kiện để vận hành phương tiện giao hàng (xe máy, ô tô, hoặc xe đạp, tùy theo loại hình dịch vụ).
                    2. Phương tiện giao hàng: Bạn cần có phương tiện vận chuyển hợp pháp (xe máy, ô tô, hoặc phương tiện khác). Phương tiện phải đảm bảo an toàn và có đăng ký, bảo hiểm đầy đủ.
                    3. CMND/CCCD hoặc hộ chiếu: Cung cấp các giấy tờ tùy thân hợp pháp như CMND/CCCD để xác minh thông tin cá nhân.
                    4. Sức khỏe tốt: Bạn cần đảm bảo sức khỏe tốt để có thể hoàn thành công việc lái xe và giao hàng trong điều kiện giao thông.
                    5. Đủ tuổi: Độ tuổi tối thiểu để trở thành tài xế thường là 18 tuổi hoặc theo quy định của địa phương.
                    6. Điều kiện về nơi cư trú: Một số yêu cầu có thể yêu cầu tài xế cư trú trong khu vực cụ thể mà HustFood cung cấp dịch vụ.
                    7. Kiểm tra lý lịch (nếu cần): HustFood có thể yêu cầu bạn cung cấp lý lịch tư pháp hoặc các kiểm tra an ninh khác để đảm bảo an toàn cho khách hàng.
                    8. Đăng ký qua ứng dụng hoặc website: Sau khi đáp ứng các điều kiện trên, bạn cần đăng ký tài khoản tài xế qua ứng dụng hoặc website HustFood và hoàn thành các bước xác thực.
                Khi các điều kiện trên được thỏa mãn và hồ sơ của bạn được xét duyệt, bạn sẽ được thông báo và có thể bắt đầu nhận đơn giao hàng từ HustFood.`    
            ]
        },
    ]
    
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
            {question.map((item) => (
                activeTab === item.id && (
                    <div>
                        {item.question.map((question, index) => (
                        <div key={item.id} className="bg-white shadow-md rounded-lg p-6">
                            <div className="border-b last:border-none py-4 flex items-center justify-between">
                                <p key={index} className="text-lg font-medium text-gray-800">{question} </p>
                                <button className="text-blue-500 font-bold text-xl" onClick={() => setShowAnswer(!showAnswer)}>{showAnswer ? "-" : "+"}</button>
                            </div>
                            {showAnswer && (
                                <div className="text-sm">
                                {item.answer[index].split('\n').map((answer, i) => (
                                  <p key={i}>{answer}</p>
                                ))}
                              </div>
                            )}
                        </div>
                        ))}   
                </div>)
            ))}
        </div>
    );
};

export default Question;