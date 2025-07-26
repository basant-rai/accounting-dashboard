import { BuildingStorefrontIcon, ArchiveBoxIcon, BanknotesIcon, ShoppingCartIcon, UserGroupIcon, BuildingLibraryIcon, ScaleIcon, DocumentTextIcon } from "@heroicons/react/24/solid";

const sidebarItems: ISidebarListItem[] = [
  {
    title: "Dashboard",
    key: "dashboard",
    href: "/",
    Icon: BuildingStorefrontIcon
  },
  {
    title: "Inventory",
    key: "inventory",
    Icon: ArchiveBoxIcon,
    children: [
      {
        title: "Items",
        key: "items",
        href: "/inventory/items",
      },
      {
        title: "Groups",
        key: "groups",
        href: "/inventory/groups",
      },
      {
        title: "Variants",
        key: "variants",
        href: "/inventory/variants",
      },
      {
        title: "Transfer Orders",
        key: "transfer-orders",
        href: "/inventory/transfer-orders",
      },
      {
        title: "Adjustment",
        key: "adjustment",
        href: "/inventory/adjustment",
      },
      {
        title: "Warehouses",
        key: "warehouses",
        href: "/inventory/warehouses",
      },
      {
        title: "Histories",
        key: "histories",
        href: "/inventory/histories",
      },
    ],
  },
  {
    title: "Sales",
    key: "sales",
    Icon: BanknotesIcon,
    children: [
      {
        title: "Invoices",
        key: "invoices",
        href: "/sales/invoices",
      },
      {
        title: "Revenues",
        key: "revenues",
        href: "/sales/revenues",
      },
      {
        title: "Sales Return",
        key: "sales-return",
        href: "/sales/sales-return",
      },
      {
        title: "Customers",
        key: "customers",
        href: "/sales/customers",
      },
    ],
  },
  {
    title: "Purchases",
    key: "purchaes",
    Icon: ShoppingCartIcon,
    children: [
      {
        title: "Bills",
        key: "bills",
        href: "/purchases/bills",
      },
      {
        title: "Payments",
        key: "payments",
        href: "/purchases/payments",
      },
      {
        title: "Purchase Return",
        key: "purchase-return",
        href: "/purchases/purchase-return",
      },
      {
        title: "Vendors",
        key: "vendors",
        href: "/purchases/vendors",
      },
    ],
  },
  {
    title: "HR",
    key: "hr",
    Icon: UserGroupIcon,
    children: [
      {
        title: "Employees",
        key: "employees",
        href: "/hr/employees",
      },
      {
        title: "Positions",
        key: "positions",
        href: "/hr/positions",
      },
    ]

  },
  {
    title: "Banking",
    key: "banking",
    Icon: BuildingLibraryIcon,
    children: [
      {
        title: "Accounts",
        key: "accounts",
        href: "/banking/accounts",
      },
      {
        title: "Transfers",
        key: "transfers",
        href: "/banking/transfers",
      },
      {
        title: "Transactions",
        key: "transactions",
        href: "/banking/transactions",
      },
      {
        title: "Reconciliations",
        key: "reconciliations",
        href: "/banking/reconciliations",
      },
    ]
  },
  {
    title: "Double Entry",
    key: "double-entry",
    Icon: ScaleIcon,
    children: [
      {
        title: "Chart of Accounts",
        key: "chart-of-accounts",
        href: "/double-entry/chart-of-accounts/assets",
      },
      {
        title: "Manual Journal",
        key: "manual-journal",
        href: "/double-entry/manual-journal",
      }
    ]
  },
  {
    title: "Reports",
    key: "reports",
    Icon: DocumentTextIcon,
    href: "/reports",
    children: [
      {
        title: "Accounting",
        key: "accounting-report",
        href: "/accounting-report",
      },
      {
        title: "Income Expenses",
        key: "income-expenses-report",
        href: "/income-expenses-report",
      },
      {
        title: "Inventory",
        key: "inventory-report",
        href: "/inventory-report",
      }
    ]
  }
];

export interface ISidebarItem {
  title: string;
  href: string;
}

export interface ISidebarListItem {
  title: string;
  key: string;
  href?: string;
  Icon?: any
  children?: ISidebarListItem[];
  open?: any
  value?: any
}

export { sidebarItems };


