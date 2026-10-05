type Language = 'en' | 'ms' | 'zh';

const translations: Record<'ms' | 'zh', Record<string, string>> = {
  ms: {
    'Stays': 'Penginapan', 'Reviews': 'Ulasan', 'About': 'Tentang', 'Book now': 'Tempah sekarang', 'Language': 'Bahasa',
    'Open menu': 'Buka menu', 'Close menu': 'Tutup menu', 'Choose language': 'Pilih bahasa',
    'Blog': 'Blog', 'Eztidor Solution Blog': 'Blog Eztidor Solution',
    'Kuantan homestay & travel guides': 'Panduan homestay & pelancongan Kuantan',
    'Tips, guides and local know-how for your trip to Kuantan, Pahang — from the best beaches and food to choosing the right short-term or long-term homestay in Kuantan.': 'Tip, panduan dan pengetahuan tempatan untuk percutian anda ke Kuantan, Pahang — daripada pantai dan makanan terbaik hingga memilih homestay jangka pendek atau panjang yang sesuai di Kuantan.',
    'Read more': 'Baca lagi', 'Keep reading': 'Teruskan membaca', '← All articles': '← Semua artikel',
    'Looking for a homestay in Kuantan?': 'Mencari homestay di Kuantan?',
    'Eztidor Solution offers spacious, fully-furnished short- and long-term homestays across Kuantan, Pahang.': 'Eztidor Solution menawarkan homestay jangka pendek dan panjang yang luas serta lengkap berperabot di seluruh Kuantan, Pahang.',
    'Browse our stays': 'Lihat penginapan kami', 'Home': 'Laman Utama', 'Back to home': 'Kembali ke laman utama',
    'Homestays in Kuantan, Malaysia': 'Homestay di Kuantan, Malaysia',
    'Short stay or long stay — we have the home for it.': 'Penginapan singkat atau panjang — kami ada rumah yang sesuai.',
    "Eztidor Solution runs spacious, spotless, fully-furnished homes across Kuantan. Whether you need a place for the weekend or for the season, choose the way you'd like to stay.": 'Eztidor Solution mengurus rumah yang luas, bersih dan lengkap berperabot di seluruh Kuantan. Sama ada untuk hujung minggu atau tempoh lebih panjang, pilih cara penginapan anda.',
    'Nightly': 'Harian', 'Monthly': 'Bulanan', 'Short-term homestay': 'Homestay jangka pendek', 'Long-term homestay': 'Homestay jangka panjang',
    'Weekends & holidays, by the night': 'Hujung minggu & cuti, mengikut malam',
    'Relocation & extended stays, by the month': 'Penempatan semula & penginapan panjang, mengikut bulan',
    'Perfect for family getaways, group trips and quick escapes. Move-in-ready homes with everything set up, so you can arrive and relax.': 'Sesuai untuk percutian keluarga, rombongan dan percutian singkat. Rumah sedia didiami dengan segala kemudahan untuk anda terus berehat.',
    'A comfortable home base for work postings, relocation or a longer visit — set up for easy daily living, with flexible monthly terms.': 'Kediaman selesa untuk tugasan kerja, penempatan semula atau lawatan panjang — lengkap untuk kehidupan harian dengan tempoh bulanan yang fleksibel.',
    'Weekend, holiday & short-notice bookings': 'Tempahan hujung minggu, cuti & saat akhir', 'Groups of up to 30 guests': 'Kumpulan sehingga 30 tetamu',
    'Fully furnished — kitchen, WiFi & air-con': 'Lengkap berperabot — dapur, WiFi & penghawa dingin', 'Fast, friendly WhatsApp booking': 'Tempahan WhatsApp yang cepat dan mesra',
    'Discounted monthly rates': 'Kadar bulanan berdiskaun', 'Ideal for relocation & remote work': 'Sesuai untuk penempatan semula & kerja jarak jauh',
    'Furnished & equipped for daily living': 'Lengkap untuk kehidupan harian', 'Flexible durations — ask for a quote': 'Tempoh fleksibel — minta sebut harga',
    'Browse short-term stays': 'Lihat penginapan jangka pendek', 'Explore long-term stays': 'Terokai penginapan jangka panjang',
    'Enquire about long-term': 'Tanya tentang jangka panjang', 'View all properties': 'Lihat semua penginapan',
    'Continue to long-term stays': 'Teruskan ke penginapan jangka panjang', 'Continue to the property collection': 'Teruskan ke koleksi penginapan',
    'Chat with Eztidor Solution on WhatsApp': 'Sembang dengan Eztidor Solution di WhatsApp',
    'Short Term Rent': 'Sewaan Jangka Pendek', 'Long Term Rent': 'Sewaan Jangka Panjang',
    'Short Term': 'Jangka Pendek', 'Long Term': 'Jangka Panjang', 'Rent': 'Sewaan', 'homes': 'rumah', 'Ask on WhatsApp': 'Tanya melalui WhatsApp',
    'Identity verified': 'Identiti disahkan', 'Entire places': 'Seluruh kediaman', 'Speaks': 'Bahasa',
    'The collection': 'Koleksi', 'Vacation homes in & around Kuantan': 'Rumah percutian di sekitar Kuantan',
    'From three-storey luxury houses to beachfront bungalows with private pools — pick the space that fits your group.': 'Daripada rumah mewah tiga tingkat hingga banglo tepi pantai dengan kolam persendirian — pilih ruang yang sesuai untuk kumpulan anda.',
    'All homes': 'Semua rumah', 'Up to 15 guests': 'Sehingga 15 tetamu', '16–20 guests': '16–20 tetamu', '21–30 guests': '21–30 tetamu',
    'Guest favourite': 'Pilihan tetamu', 'View photos': 'Lihat foto', 'View details': 'Lihat butiran', 'Ask to book': 'Tanya untuk tempah',
    'Featured stay': 'Penginapan pilihan', 'Ask about this stay': 'Tanya tentang penginapan ini',
    'About Eztidor Solution': 'Tentang Eztidor Solution', 'Comfortable homestays, run with care': 'Homestay selesa, diurus dengan penuh perhatian',
    'Rating': 'Penilaian', 'Years hosting': 'Tahun menjadi hos', 'What guests say': 'Kata tetamu', 'Based in': 'Berpangkalan di', 'Homes': 'Rumah', 'Languages': 'Bahasa',
    'guests': 'tetamu', 'bedrooms': 'bilik tidur', 'baths': 'bilik mandi', 'beds': 'katil', 'Entire place': 'Seluruh kediaman',
    'Planning a group getaway to Kuantan?': 'Merancang percutian berkumpulan ke Kuantan?', 'Message us to book': 'Mesej kami untuk tempahan',
    'Chat with us': 'Sembang dengan kami', 'Superhost': 'Superhost', 'All stays': 'Semua penginapan', 'Back to all stays': 'Kembali ke semua penginapan',
    "Where you'll be": 'Lokasi anda', 'Message Eztidor Solution directly to check availability and book this stay.': 'Mesej Eztidor Solution untuk menyemak ketersediaan dan menempah penginapan ini.',
    'Show all photos': 'Tunjukkan semua foto', 'Photo viewer': 'Paparan foto',
    'Swipe or use arrow keys to browse': 'Leret atau gunakan kekunci anak panah', 'Previous photo': 'Foto sebelumnya', 'Next photo': 'Foto seterusnya', 'Close photo viewer': 'Tutup paparan foto',
    'Filter properties by guest capacity': 'Tapis penginapan mengikut kapasiti tetamu', 'Choose a stay': 'Pilih penginapan'
    , 'Eztidor Solution · Vacation homes in Kuantan, Malaysia': 'Eztidor Solution · Rumah percutian di Kuantan, Malaysia',
    'Eztidor Solution — spacious, spotless short- and long-term homestays in Kuantan, Malaysia. A verified Superhost with a 4.82 rating across 192 reviews.': 'Eztidor Solution — homestay jangka pendek dan panjang yang luas serta bersih di Kuantan, Malaysia. Superhost disahkan dengan penilaian 4.82 daripada 192 ulasan.',
    'Chinese, English, and Malay': 'Bahasa Cina, Inggeris dan Melayu', 'Speaks Chinese, English, and Malay': 'Bahasa: Cina, Inggeris dan Melayu', '13 stays': '13 penginapan',
    'Entire places · Groups up to 30 guests': 'Seluruh kediaman · Kumpulan sehingga 30 tetamu',
    "3-Storey Luxury House · June's": "Rumah Mewah 3 Tingkat · June's", 'Cozy Vacation House · Pool': 'Rumah Percutian Selesa · Kolam',
    'Beach Vacation House · Sepat': 'Rumah Percutian Pantai · Sepat', 'Event & Party House · 30 pax Pool': 'Rumah Acara & Parti · Kolam 30 orang',
    'Newly Renovated Budget · 12 pax': 'Rumah Bajet Baru Diubah Suai · 12 orang', 'Teluk Cempedak Bungalow · Pool': 'Banglo Teluk Cempedak · Kolam',
    'Cozy Town House · Bathtub': 'Rumah Bandar Selesa · Tab Mandi', 'Cosy Big House · 4B4B': 'Rumah Besar Selesa · 4B4B',
    'Grand': 'Megah', '3-Storey': '3 Tingkat', 'Villa': 'Vila', 'Luxury': 'Mewah', 'House': 'Rumah', 'Cozy': 'Selesa', 'Poolside': 'Tepi Kolam', 'Beachside': 'Tepi Pantai', 'Escape': 'Percutian', 'Party': 'Parti', 'Pool': 'Kolam', 'Newly': 'Baru', 'Renovated': 'Diubah Suai', 'Home': 'Kediaman', 'Teluk': 'Teluk', 'Cempedak': 'Cempedak', 'Bungalow': 'Banglo', 'Town': 'Bandar', 'Cosy': 'Selesa', 'Big': 'Besar',
    'Eztidor Solution manages spacious, spotless homestays across Kuantan, Malaysia — for short weekend getaways and long-term stays alike. Every home is fully furnished, guest-ready and backed by responsive local support, earning a 4.82 rating across 192 reviews.': 'Eztidor Solution mengurus homestay yang luas dan bersih di seluruh Kuantan, Malaysia — untuk percutian hujung minggu dan penginapan jangka panjang. Setiap rumah lengkap berperabot, sedia menerima tetamu dan disokong oleh pasukan tempatan yang responsif, dengan penilaian 4.82 daripada 192 ulasan.',
    'Browse our 13 homes and message Eztidor Solution directly to book with a Superhost you can trust.': 'Lihat 13 rumah kami dan mesej Eztidor Solution untuk menempah dengan Superhost yang dipercayai.',
    'Eztidor Solution — homestays in Kuantan, Pahang. · Ratings & reviews as of August 2026.': 'Eztidor Solution — homestay di Kuantan, Pahang. · Penilaian & ulasan setakat Ogos 2026.',
    'Highly recommended. Spacious and neat for 14paxs': 'Sangat disyorkan. Luas dan kemas untuk 14 orang.',
    "The location is very strategic, with plenty of restaurants and a supermarket nearby, and it's only an 8-minute drive to Teluk Chempedak. Check-in was smooth and hassle-free, as the Eztidor Solution team was onsite to manage the housekeeping. The house is spacious and comfortably accommodated our family of 10 adults, with everyone having their own bed. We had a wonderful stay. I would definitely stay here again with my family.": 'Lokasinya sangat strategik, dengan banyak restoran dan pasar raya berdekatan, serta hanya 8 minit memandu ke Teluk Chempedak. Daftar masuk berjalan lancar dan mudah kerana pasukan Eztidor Solution berada di lokasi. Rumah ini luas dan selesa untuk keluarga kami seramai 10 orang dewasa, dengan katil untuk setiap orang. Penginapan kami sangat menyenangkan dan saya pasti akan datang lagi bersama keluarga.',
    'We had a wonderful stay with Eztidor Solution! The team is excellent — very responsive and always replied to my messages almost immediately, making the entire experience smooth and worry-free. The house is spacious, exceptionally clean, and exactly as described. It is especially suitable for large groups like ours, with plenty of space for everyone to enjoy. I highly recommend Eztidor Solution to anyone looking for a comfortable, private, and well-equipped stay.': 'Kami menikmati penginapan yang hebat bersama Eztidor Solution! Pasukannya cemerlang, sangat responsif dan membalas mesej dengan pantas. Rumahnya luas, sangat bersih dan tepat seperti penerangan. Ia amat sesuai untuk kumpulan besar dengan ruang yang mencukupi untuk semua. Saya sangat mengesyorkan Eztidor Solution kepada sesiapa yang mencari penginapan selesa, persendirian dan lengkap.',
    'Excellent host with quick response. Very accommodative. House is spacious and clean.': 'Hos yang cemerlang dan pantas memberi respons. Sangat bertimbang rasa. Rumah luas dan bersih.'
  },
  zh: {
    'Stays': '住宿', 'Reviews': '评价', 'About': '关于我们', 'Book now': '立即预订', 'Language': '语言',
    'Open menu': '打开菜单', 'Close menu': '关闭菜单', 'Choose language': '选择语言',
    'Blog': '博客', 'Eztidor Solution Blog': 'Eztidor Solution 博客',
    'Kuantan homestay & travel guides': '关丹民宿与旅游指南',
    'Tips, guides and local know-how for your trip to Kuantan, Pahang — from the best beaches and food to choosing the right short-term or long-term homestay in Kuantan.': '关丹（彭亨）旅行的贴士、指南与本地经验——从最棒的海滩与美食，到如何选择合适的关丹短租或长租民宿。',
    'Read more': '阅读更多', 'Keep reading': '继续阅读', '← All articles': '← 所有文章',
    'Looking for a homestay in Kuantan?': '在找关丹民宿吗？',
    'Eztidor Solution offers spacious, fully-furnished short- and long-term homestays across Kuantan, Pahang.': 'Eztidor Solution 在关丹（彭亨）提供宽敞、家具齐全的短租与长租民宿。',
    'Browse our stays': '浏览我们的房源', 'Home': '首页', 'Back to home': '返回首页',
    'Homestays in Kuantan, Malaysia': '马来西亚关丹民宿',
    'Short stay or long stay — we have the home for it.': '无论短住或长住，都有适合您的家。',
    "Eztidor Solution runs spacious, spotless, fully-furnished homes across Kuantan. Whether you need a place for the weekend or for the season, choose the way you'd like to stay.": 'Eztidor Solution 在关丹经营宽敞、整洁、家具齐全的住宿。无论周末度假或长期居住，都可选择适合您的方式。',
    'Nightly': '按晚', 'Monthly': '按月', 'Short-term homestay': '短期民宿', 'Long-term homestay': '长期民宿',
    'Weekends & holidays, by the night': '周末与假期，按晚入住', 'Relocation & extended stays, by the month': '搬迁与长住，按月入住',
    'Perfect for family getaways, group trips and quick escapes. Move-in-ready homes with everything set up, so you can arrive and relax.': '适合家庭度假、团体旅行和短途休息。房屋设备齐全，抵达即可轻松入住。',
    'A comfortable home base for work postings, relocation or a longer visit — set up for easy daily living, with flexible monthly terms.': '适合工作派驻、搬迁或长期探访的舒适住所，生活设施齐全，并提供灵活月租。',
    'Weekend, holiday & short-notice bookings': '周末、假期与临时预订', 'Groups of up to 30 guests': '最多容纳30位房客',
    'Fully furnished — kitchen, WiFi & air-con': '家具齐全 — 厨房、WiFi与空调', 'Fast, friendly WhatsApp booking': '快捷友好的WhatsApp预订',
    'Discounted monthly rates': '月租优惠', 'Ideal for relocation & remote work': '适合搬迁与远程办公', 'Furnished & equipped for daily living': '日常生活设施齐全', 'Flexible durations — ask for a quote': '租期灵活 — 欢迎询价',
    'Browse short-term stays': '浏览短期住宿', 'Explore long-term stays': '探索长期住宿', 'Enquire about long-term': '咨询长期住宿', 'View all properties': '查看所有房源',
    'Continue to long-term stays': '继续查看长期住宿', 'Continue to the property collection': '继续查看房源精选',
    'Chat with Eztidor Solution on WhatsApp': '通过 WhatsApp 联系 Eztidor Solution',
    'Short Term Rent': '短期租住', 'Long Term Rent': '长期租住',
    'Short Term': '短期', 'Long Term': '长期', 'Rent': '租住', 'homes': '间房源', 'Ask on WhatsApp': '通过 WhatsApp 咨询',
    'Identity verified': '身份已验证', 'Entire places': '整套房源', 'Speaks': '语言',
    'The collection': '精选房源', 'Vacation homes in & around Kuantan': '关丹及周边度假屋',
    'From three-storey luxury houses to beachfront bungalows with private pools — pick the space that fits your group.': '从三层豪宅到带私人泳池的海滨别墅，为您的团体选择合适空间。',
    'All homes': '全部房源', 'Up to 15 guests': '最多15位', '16–20 guests': '16–20位', '21–30 guests': '21–30位',
    'Guest favourite': '房客推荐', 'View photos': '查看照片', 'View details': '查看详情', 'Ask to book': '咨询预订',
    'Featured stay': '精选住宿', 'Ask about this stay': '咨询此房源',
    'About Eztidor Solution': '关于 Eztidor Solution', 'Comfortable homestays, run with care': '用心经营的舒适民宿',
    'Rating': '评分', 'Years hosting': '接待年数', 'What guests say': '房客评价', 'Based in': '所在地', 'Homes': '房源', 'Languages': '语言',
    'guests': '位房客', 'bedrooms': '间卧室', 'baths': '间浴室', 'beds': '张床', 'Entire place': '整套房源',
    'Planning a group getaway to Kuantan?': '计划关丹团体度假吗？', 'Message us to book': '联系我们预订', 'Chat with us': '联系我们',
    'Superhost': '超赞房东', 'All stays': '所有住宿', 'Back to all stays': '返回所有住宿', "Where you'll be": '住宿地点',
    'Message Eztidor Solution directly to check availability and book this stay.': '直接联系 Eztidor Solution 查询空房并预订。',
    'Show all photos': '查看全部照片', 'Photo viewer': '照片浏览器',
    'Swipe or use arrow keys to browse': '滑动或使用方向键浏览', 'Previous photo': '上一张照片', 'Next photo': '下一张照片', 'Close photo viewer': '关闭照片浏览器',
    'Filter properties by guest capacity': '按房客人数筛选房源', 'Choose a stay': '选择住宿'
    , 'Eztidor Solution · Vacation homes in Kuantan, Malaysia': 'Eztidor Solution · 马来西亚关丹度假屋',
    'Eztidor Solution — spacious, spotless short- and long-term homestays in Kuantan, Malaysia. A verified Superhost with a 4.82 rating across 192 reviews.': 'Eztidor Solution — 马来西亚关丹宽敞整洁的短期与长期民宿。已验证超赞房东，在192条评价中获得4.82分。',
    'Chinese, English, and Malay': '中文、英语和马来语', 'Speaks Chinese, English, and Malay': '语言：中文、英语和马来语', '13 stays': '13 间住宿',
    'Entire places · Groups up to 30 guests': '整套房源 · 最多容纳30位房客',
    "3-Storey Luxury House · June's": "June's 三层豪宅", 'Cozy Vacation House · Pool': '舒适泳池度假屋', 'Beach Vacation House · Sepat': 'Sepat 海滨度假屋',
    'Event & Party House · 30 pax Pool': '活动派对泳池屋 · 30人', 'Newly Renovated Budget · 12 pax': '全新装修经济屋 · 12人',
    'Teluk Cempedak Bungalow · Pool': 'Teluk Cempedak 泳池别墅', 'Cozy Town House · Bathtub': '舒适城市屋 · 浴缸', 'Cosy Big House · 4B4B': '舒适大屋 · 4房4卫',
    'Grand': '豪华', '3-Storey': '三层', 'Villa': '别墅', 'Luxury': '豪华', 'House': '住宅', 'Cozy': '舒适', 'Poolside': '泳池畔', 'Beachside': '海滨', 'Escape': '度假屋', 'Party': '派对', 'Pool': '泳池', 'Newly': '全新', 'Renovated': '装修', 'Home': '家', 'Teluk': 'Teluk', 'Cempedak': 'Cempedak', 'Bungalow': '别墅', 'Town': '城市', 'Cosy': '舒适', 'Big': '大屋',
    'Eztidor Solution manages spacious, spotless homestays across Kuantan, Malaysia — for short weekend getaways and long-term stays alike. Every home is fully furnished, guest-ready and backed by responsive local support, earning a 4.82 rating across 192 reviews.': 'Eztidor Solution 在马来西亚关丹管理宽敞整洁的民宿，适合周末短途度假和长期居住。每间房屋家具齐全、随时可入住，并由响应迅速的本地团队提供支持，在192条评价中获得4.82分。',
    'Browse our 13 homes and message Eztidor Solution directly to book with a Superhost you can trust.': '浏览我们的13间房源，直接联系 Eztidor Solution，向值得信赖的超赞房东预订。',
    'Eztidor Solution — homestays in Kuantan, Pahang. · Ratings & reviews as of August 2026.': 'Eztidor Solution — 彭亨关丹民宿。· 评分与评价截至2026年8月。',
    'Highly recommended. Spacious and neat for 14paxs': '非常推荐。空间宽敞整洁，可容纳14人。',
    "The location is very strategic, with plenty of restaurants and a supermarket nearby, and it's only an 8-minute drive to Teluk Chempedak. Check-in was smooth and hassle-free, as the Eztidor Solution team was onsite to manage the housekeeping. The house is spacious and comfortably accommodated our family of 10 adults, with everyone having their own bed. We had a wonderful stay. I would definitely stay here again with my family.": '位置非常便利，附近有许多餐厅和超市，开车到 Teluk Chempedak 只需8分钟。Eztidor Solution 团队在现场管理清洁，入住过程顺畅轻松。房屋宽敞，舒适容纳了我们10位成人，每个人都有自己的床。住宿体验非常愉快，我一定会再次和家人入住。',
    'We had a wonderful stay with Eztidor Solution! The team is excellent — very responsive and always replied to my messages almost immediately, making the entire experience smooth and worry-free. The house is spacious, exceptionally clean, and exactly as described. It is especially suitable for large groups like ours, with plenty of space for everyone to enjoy. I highly recommend Eztidor Solution to anyone looking for a comfortable, private, and well-equipped stay.': '我们在 Eztidor Solution 度过了愉快的时光！团队非常出色，响应迅速，几乎立即回复消息，让整个体验顺畅无忧。房屋宽敞、非常干净，与描述完全一致，尤其适合我们这样的大型团体，每个人都有充足空间。我强烈推荐给寻找舒适、私密且设备齐全住宿的人。',
    'Rumah cantik, tenang dan dekat je dengan pantai. Ada mini game, wifi, tv. Aircond semua sejuk, ada mesin basuh dan semua peralatan memasak. Terbaikkkkk, boleh datang, recommend!': '房子漂亮安静，离海滩很近。配有小游戏、WiFi、电视、冷气、洗衣机和完整厨具。非常棒，值得推荐！',
    'Excellent host with quick response. Very accommodative. House is spacious and clean.': '房东回复迅速，非常体贴。房屋宽敞干净。'
  }
};

const originalText = new WeakMap<Text, string>();
const originalAttributes = new WeakMap<Element, Map<string, string>>();
const normalize = (value: string) => value.replace(/\s+/g, ' ').trim();

const patternTranslate = (value: string, language: Language) => {
  if (language === 'en') return value;
  const isMs = language === 'ms';
  const patterns: Array<[RegExp, (...matches: string[]) => string]> = [
    [/^(\d+) homes$/, (_, n) => isMs ? `${n} rumah` : `${n} 间房源`],
    [/^(\d+) guests$/, (_, n) => isMs ? `${n} tetamu` : `${n} 位房客`],
    [/^(\d+) bedrooms$/, (_, n) => isMs ? `${n} bilik tidur` : `${n} 间卧室`],
    [/^(\d+) baths$/, (_, n) => isMs ? `${n} bilik mandi` : `${n} 间浴室`],
    [/^(\d+) beds$/, (_, n) => isMs ? `${n} katil` : `${n} 张床`],
    [/^Sleeps (\d+)$/, (_, n) => isMs ? `Untuk ${n} tetamu` : `可住 ${n} 位`],
    [/^(\d+) reviews$/, (_, n) => isMs ? `${n} ulasan` : `${n} 条评价`],
    [/^Verified since (.+)$/, (_, date) => isMs ? `Disahkan sejak ${date}` : `自 ${date} 起已验证`],
    [/^(.+) by Eztidor Solution$/, (_, type) => isMs ? `${type === 'Entire place' ? 'Seluruh kediaman' : type} oleh Eztidor Solution` : `${type === 'Entire place' ? '整套房源' : type} · Eztidor Solution`],
    [/^(\d+) reviews · ([\d.]+) average$/, (_, reviews, rating) => isMs ? `${reviews} ulasan · purata ${rating}` : `${reviews} 条评价 · 平均 ${rating}`],
    [/^★ ([\d.]+) · (\d+) reviews$/, (_, rating, reviews) => isMs ? `★ ${rating} · ${reviews} ulasan` : `★ ${rating} · ${reviews} 条评价`],
    [/^Featured stay — (.+) · Kuantan, MY$/, (_, n) => isMs ? `Penginapan pilihan — ${n} · Kuantan, MY` : `精选住宿 — ${n} · 关丹，马来西亚`],
    [/^Go to stay (\d+)$/, (_, n) => isMs ? `Pergi ke penginapan ${n}` : `前往住宿 ${n}`]
    , [/^(.+) photo gallery$/, (_, name) => isMs ? `Galeri foto ${translations.ms[name] ?? name}` : `${translations.zh[name] ?? name} 照片库`]
    , [/^View photos of (.+)$/, (_, name) => isMs ? `Lihat foto ${translations.ms[name] ?? name}` : `查看${translations.zh[name] ?? name}的照片`]
    , [/^Ask Eztidor Solution about booking (.+) on WhatsApp$/, (_, name) => isMs ? `Tanya Eztidor Solution tentang tempahan ${translations.ms[name] ?? name} di WhatsApp` : `通过 WhatsApp 向 Eztidor Solution 咨询预订${translations.zh[name] ?? name}`]
    , [/^Map of (.+)$/, (_, name) => isMs ? `Peta ${translations.ms[name] ?? name}` : `${translations.zh[name] ?? name}的地图`]
    , [/^All photos of (.+)$/, (_, name) => isMs ? `Semua foto ${translations.ms[name] ?? name}` : `${translations.zh[name] ?? name}的全部照片`]
    , [/^(.+) — main photo$/, (_, name) => isMs ? `${translations.ms[name] ?? name} — foto utama` : `${translations.zh[name] ?? name} — 主照片`]
    , [/^(.+) — photo (\d+) of (\d+)$/, (_, name, n, total) => isMs ? `${translations.ms[name] ?? name} — foto ${n} daripada ${total}` : `${translations.zh[name] ?? name} — 第 ${n} 张，共 ${total} 张`]
    , [/^(.+) — photo (\d+)$/, (_, name, n) => isMs ? `${translations.ms[name] ?? name} — foto ${n}` : `${translations.zh[name] ?? name} — 照片 ${n}`]
    , [/^(.+) · Eztidor Solution$/, (_, name) => `${translations[language][name] ?? name} · Eztidor Solution`]
  ];
  for (const [pattern, format] of patterns) {
    const match = value.match(pattern);
    if (match) return format(...match);
  }

  let compound = value;
  const replacements: Array<[RegExp, string]> = isMs ? [
    [/(\d+) guests/g, '$1 tetamu'], [/(\d+) bedrooms/g, '$1 bilik tidur'], [/(\d+) baths/g, '$1 bilik mandi'], [/(\d+) beds/g, '$1 katil'],
    [/Sleeps (\d+)/g, 'Untuk $1 tetamu'], [/(\d+) reviews/g, '$1 ulasan'], [/(\d+) photos/g, '$1 foto'], [/Entire places/g, 'Seluruh kediaman'], [/Entire place/g, 'Seluruh kediaman'],
    [/Identity verified/g, 'Identiti disahkan'], [/average across/g, 'purata daripada'], [/Groups up to/g, 'Kumpulan sehingga'],
    [/Speaks /g, 'Bahasa: '], [/Chinese/g, 'Cina'], [/English/g, 'Inggeris'], [/\bMalay\b/g, 'Melayu'], [/Superhost/g, 'Superhost'],
    [/January/g, 'Januari'], [/February/g, 'Februari'], [/March/g, 'Mac'], [/April/g, 'April'], [/\bMay\b/g, 'Mei'], [/June/g, 'Jun'], [/July/g, 'Julai'], [/August/g, 'Ogos'], [/September/g, 'September'], [/October/g, 'Oktober'], [/November/g, 'November'], [/December/g, 'Disember'], [/min read/g, 'min bacaan']
  ] : [
    [/(\d+) guests/g, '$1 位房客'], [/(\d+) bedrooms/g, '$1 间卧室'], [/(\d+) baths/g, '$1 间浴室'], [/(\d+) beds/g, '$1 张床'],
    [/Sleeps (\d+)/g, '可住 $1 位'], [/(\d+) reviews/g, '$1 条评价'], [/(\d+) photos/g, '$1 张照片'], [/Entire places/g, '整套房源'], [/Entire place/g, '整套房源'],
    [/Identity verified/g, '身份已验证'], [/([\d.]+) average across (\d+) 条评价/g, '平均 $1 · $2 条评价'], [/Groups up to/g, '最多容纳'],
    [/Speaks /g, '语言：'], [/Chinese/g, '中文'], [/English/g, '英语'], [/\bMalay\b/g, '马来语'], [/\bMalaysia\b/g, '马来西亚'], [/Superhost/g, '超赞房东'],
    [/January/g, '1月'], [/February/g, '2月'], [/March/g, '3月'], [/April/g, '4月'], [/\bMay\b/g, '5月'], [/June/g, '6月'], [/July/g, '7月'], [/August/g, '8月'], [/September/g, '9月'], [/October/g, '10月'], [/November/g, '11月'], [/December/g, '12月'], [/min read/g, '分钟阅读']
  ];
  replacements.forEach(([pattern, replacement]) => { compound = compound.replace(pattern, replacement); });
  return compound;
};

const translateValue = (value: string, language: Language) => {
  const key = normalize(value);
  if (!key || language === 'en') return key;
  return translations[language][key] ?? patternTranslate(key, language);
};

const translateTextNode = (node: Text, language: Language) => {
  if (!originalText.has(node)) originalText.set(node, node.nodeValue ?? '');
  const source = originalText.get(node) ?? '';
  const key = normalize(source);
  if (!key) return;
  const translated = translateValue(source, language);
  const leading = source.match(/^\s*/)?.[0] ?? '';
  const trailing = source.match(/\s*$/)?.[0] ?? '';
  const next = `${leading}${translated}${trailing}`;
  if (node.nodeValue !== next) node.nodeValue = next;
};

const translateElementAttributes = (element: Element, language: Language) => {
  const attributes = ['aria-label', 'title', 'placeholder', 'alt'];
  let originals = originalAttributes.get(element);
  if (!originals) {
    originals = new Map();
    originalAttributes.set(element, originals);
  }
  attributes.forEach((name) => {
    const current = element.getAttribute(name);
    if (current == null) return;
    if (!originals!.has(name)) originals!.set(name, current);
    const source = originals!.get(name) ?? current;
    const translated = translateValue(source, language);
    if (current !== translated) element.setAttribute(name, translated);
  });
};

const translateRoot = (root: ParentNode, language: Language) => {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      return parent && !['SCRIPT', 'STYLE', 'NOSCRIPT'].includes(parent.tagName) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }
  });
  let node = walker.nextNode();
  while (node) {
    translateTextNode(node as Text, language);
    node = walker.nextNode();
  }
  if (root instanceof Element) translateElementAttributes(root, language);
  root.querySelectorAll?.('*').forEach((element) => translateElementAttributes(element, language));
};

let currentLanguage: Language = 'en';
const originalDocumentTitle = document.title;
const descriptionMeta = document.querySelector<HTMLMetaElement>('meta[name="description"]');
const originalDescription = descriptionMeta?.content ?? '';
try {
  const saved = localStorage.getItem('eztidor-language');
  if (saved === 'ms' || saved === 'zh' || saved === 'en') currentLanguage = saved;
} catch {}

const updateSwitchers = () => {
  document.querySelectorAll<HTMLButtonElement>('[data-language]').forEach((button) => {
    button.setAttribute('aria-pressed', String(button.dataset.language === currentLanguage));
  });
};

const applyLanguage = (language: Language) => {
  currentLanguage = language;
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : language;
  document.title = translateValue(originalDocumentTitle, language);
  if (descriptionMeta) descriptionMeta.content = translateValue(originalDescription, language);
  translateRoot(document.body, language);
  updateSwitchers();
  try { localStorage.setItem('eztidor-language', language); } catch {}
};

document.addEventListener('click', (event) => {
  const button = (event.target as Element).closest<HTMLButtonElement>('[data-language]');
  const language = button?.dataset.language;
  if (language === 'en' || language === 'ms' || language === 'zh') applyLanguage(language);
});

const observer = new MutationObserver((mutations) => {
  if (currentLanguage === 'en') return;
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) translateTextNode(node as Text, currentLanguage);
      else if (node instanceof Element) translateRoot(node, currentLanguage);
    });
  });
});

applyLanguage(currentLanguage);
observer.observe(document.body, { childList: true, subtree: true });
