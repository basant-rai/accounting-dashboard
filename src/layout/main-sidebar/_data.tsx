import { AdjustmentsHorizontalIcon, ArchiveBoxIcon, BellIcon, BookOpenIcon, BuildingOfficeIcon, BuildingStorefrontIcon, ChartBarSquareIcon, ClipboardDocumentListIcon, ClockIcon, Cog6ToothIcon, CurrencyRupeeIcon, DocumentIcon, DocumentTextIcon, EnvelopeIcon, FlagIcon, FolderIcon, PowerIcon, ReceiptPercentIcon, ScaleIcon, Square2StackIcon, TagIcon, UserCircleIcon, UserIcon, XMarkIcon } from '@heroicons/react/24/solid'

export const MainSidebarItems = [
  {
    title: 'Profile',
    key: "profile",
    Icon: UserIcon,
    children: [
      {
        title: "Profile",
        key: "profile",
        Icon: UserCircleIcon,
        href: "#",
      },
      {
        title: "Logout",
        key: "logout",
        Icon: PowerIcon,
        href: "#",
      },
    ],
  },
  {
    title: "Setting",
    key: "setting",
    Icon: Cog6ToothIcon,
    children: [
      {
        title: "Company",
        key: "company",
        Icon: BuildingOfficeIcon,
        href: "/setting/company",
      },
      {
        title: "Localisation",
        key: "localisation",
        Icon: FlagIcon,
        href: "#",
      },
      {
        title: "Invoice",
        key: "invoice",
        Icon: ClipboardDocumentListIcon,
        href: "#",
      },
      {
        title: "Default",
        key: "default",
        Icon: AdjustmentsHorizontalIcon,
        href: "#",
      },

      {
        title: "Email service",
        key: "email-service",
        Icon: EnvelopeIcon,
        href: "#",
      },
      {
        title: "Email Templates",
        key: "email-templates",
        Icon: Square2StackIcon,
        href: "#",
      },
      {
        title: "Scheduling",
        key: "scheduling",
        Icon: ClockIcon,
        href: "/setting/scheduling",
      },
      {
        title: "Categories",
        key: "categories",
        Icon: TagIcon,
        href: "/setting/categories",
      },
      {
        title: "Currencies",
        key: "currencies",
        Icon: CurrencyRupeeIcon,
        href: "/setting/currencies",
      },
      {
        title: "Taxes",
        key: "taxes",
        Icon: ReceiptPercentIcon,
        href: "/setting/taxes",
      },
      {
        title: "Sales Return",
        key: "sales-return",
        Icon: ReceiptPercentIcon,
        href: "/setting/sales-return",
      },
      {
        title: "Purchase Return",
        key: "purchas return",
        Icon: ReceiptPercentIcon,
        href: "/setting/purchase-return",
      },
      {
        title: "Double Entry",
        key: "double-entry",
        Icon: ScaleIcon,
        href: "/setting/double-entry",
      },
      {
        title: "Inventory",
        key: "inventory",
        Icon: ArchiveBoxIcon,
        href: "/setting/inventory",
      },

    ],
  },
  {
    title: 'cccc',
    key: "notications",
    Icon: BellIcon,
    children: [
      {
        title: "ccccccccccccc",
        key: "aaaa",
        href: "#",
        Icon: TagIcon,

      },

    ],
  },
  {
    title: 'Accounting Report',
    key: "accounting-report",
    Icon: DocumentTextIcon,
    children: [
      {
        title: "Balance Sheet",
        key: "balance-sheet",
        href: "/accounting-report/balance-sheet",
        Icon: ScaleIcon,
      },
      {
        title: "General Ledger",
        key: "general-ledger",
        href: "/accounting-report/general-ledger",
        Icon: DocumentIcon,
      },
      {
        title: "Journal Entries",
        key: "journal-entries",
        href: "/accounting-report/journal-entries",
        Icon: TagIcon,
      },
      {
        title: "Profit & Loss",
        key: "profit-loss",
        href: "/accounting-report/profit-loss",
        Icon: TagIcon,
      },
      {
        title: "Profit & Loss (Inventory)",
        key: "profit-loss-inventory",
        href: "/accounting-report/profit-loss-inventory",
        Icon: TagIcon,
      },
      {
        title: "Tax Summary",
        key: "tax-summary",
        href: "/accounting-report/tax-summary",
        Icon: TagIcon,
      },
      {
        title: "Trial Balance",
        key: "trial-balance",
        href: "/accounting-report/trial-balance",
        Icon: TagIcon,
      },
    ],
  },
  {
    title: 'Income Expenses Report',
    key: "income-expenses-report",
    Icon: ChartBarSquareIcon,
    children: [
      {
        title: "Expense Summary ",
        key: "expense-summary",
        href: "/reports/income-expenses/balance-sheet",
        Icon: TagIcon,
      },
      {
        title: "Income Summary",
        key: "income-summary",
        href: "#",
        Icon: TagIcon,
      },
      {
        title: "Income vs Expense",
        key: "income-vs-expense",
        href: "#",
        Icon: TagIcon,
      },

    ],
  },
  {
    title: 'Inventory Report',
    key: "inventory-report",
    Icon: ArchiveBoxIcon,
    children: [
      {
        title: "Item Summary",
        key: "item-summary",
        href: "/reports/item-summary/balance-sheet",
        Icon: ScaleIcon,
      },
      {
        title: "Purchase Summary",
        key: "purchase-summary",
        href: "#",
        Icon: TagIcon,
      },
      {
        title: "Sale Summary",
        key: "sale-summary",
        href: "#",
        Icon: TagIcon,
      },
      {
        title: "Stock Status",
        key: "stock-status",
        href: "#",
        Icon: TagIcon,
      },

    ],
  },
]