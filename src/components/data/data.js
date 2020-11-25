const data = [
  {
    name: "Air Group",
    permissions: {
      read: true,
      write: false,
      block: false
    }
  },
  {
    name: "Analytics",
    permissions: {
      read: false,
      write: false,
      block: false
    }
  },
  {
    name: "Guest Management",
    permissions: {
      read: false,
      write: false,
      block: false
    }
  },
  {
    name: "Network Management",
    permissions: {
      read: false,
      write: false,
      block: false
    },
    children: [
      {
        name: "SubResource 1",
        permissions: {
          read: false,
          write: true,
          block: false
        }
      },
      {
        name: "SubResource 2",
        permissions: {
          read: false,
          write: false,
          block: false
        }
      },
      {
        name: "SubResource 3",
        permissions: {
          read: true,
          write: false,
          block: false
        }
      },
      {
        name: "SubResource 4",
        permissions: {
          read: false,
          write: false,
          block: false
        }
      }
    ]
  },
  {
    name: "Reports",
    permissions: {
      read: false,
      write: false,
      block: false
    }
  },
  {
    name: "Resources Foo",
    permissions: {
      read: false,
      write: false,
      block: false
    },
    children: [
      {
        name: "SubResource 1",
        permissions: {
          read: false,
          write: false,
          block: false
        }
      },
      {
        name: "SubResource 2",
        permissions: {
          read: false,
          write: false,
          block: false
        }
      }
    ]
  },
  {
    name: "Resources Foo 1",
    permissions: {
      read: false,
      write: false,
      block: false
    }
  },
  {
    name: "Resources Foo 2",
    permissions: {
      read: false,
      write: false,
      block: false
    }
  },
  {
    name: "United Communications",
    permissions: {
      read: false,
      write: false,
      block: false
    },
    children: [
      {
        name: "SubResource 1",
        permissions: {
          read: false,
          write: false,
          block: false
        }
      },
      {
        name: "SubResource 2",
        permissions: {
          read: false,
          write: false,
          block: false
        }
      },
      {
        name: "SubResource 2",
        permissions: {
          read: false,
          write: false,
          block: false
        }
      },
      {
        name: "SubResource 4",
        permissions: {
          read: false,
          write: false,
          block: false
        }
      },
      {
        name: "SubResource 5",
        permissions: {
          read: false,
          write: false,
          block: false
        }
      },
      {
        name: "SubResource 6",
        permissions: {
          read: false,
          write: false,
          block: false
        }
      }
    ]
  },
  {
    name: "Virtual Gateways",
    permissions: {
      read: false,
      write: false,
      block: false
    }
  }
];

export default data;
