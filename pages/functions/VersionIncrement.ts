function incrementVersion(versionStr:string) {
  // Split the version string into parts based on the period character '.'
  const parts = versionStr.split(".");

  // Check if there are at least three parts (major, minor, and patch)
  if (parts.length < 3) {
    throw new Error(
      "Version string must have at least three parts: major.minor.patch"
    );
  }
  const v = parts[0].split("-")

  // Extract major, minor, and patch version numbers
  const major = parseInt(v[1]);
  const minor = parseInt(parts[1]);
  const patch = parseInt(parts[2]);

  // Increment the patch version
  const newPatch = patch + 1;

  // Combine the parts back into a version string
  const newVersion = `v-${major}.${minor}.${newPatch}`;

  return newVersion;
}

export {incrementVersion}
