export function timeAgo(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = now - date;

  const diffInSeconds = Math.floor(diff / 1000);
  const diffInMinutes = Math.floor(diff / (1000 * 60));
  const diffInHours = Math.floor(diff / (1000 * 60 * 60));
  const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  const diffInYears = Math.floor(diffInDays / 365);

  if (diffInYears > 0) {
    return `${diffInYears} տարի առաջ`;
  } else if (diffInDays > 0) {
    return `${diffInDays} օր առաջ`;
  } else if (diffInHours > 0) {
    return `${diffInHours} ժամ առաջ`;
  } else if (diffInMinutes > 0) {
    return `${diffInMinutes} րոպե առաջ`;
  } else {
    return `${diffInSeconds} վայրկյան առաջ`;
  }
}

export function normalizedSentence(str, count) {
  let part = "";
  for (let i = count; i < str.length; i++) {
    if (!str[i].trim()) {
      break;
    } else {
      part += str[i];
    }
  }

  return str.slice(0, count) + part;
}

export function recursiveString(arr) {
  let str = "";
  arr.forEach((element) => {
    if (typeof element === "string") {
      str += element;
    } else {
      if (Array.isArray(element.props.children)) {
        str += recursiveString(element.props.children);
      } else {
        str += element.props.children;
      }
    }
  });
  return str;
}
