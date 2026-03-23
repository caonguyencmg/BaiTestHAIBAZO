function TreeNode({ node, level = 0 }) {
  return (
    <div style={{ paddingLeft: level * 12 }}>
      <div
        className={`${node?.type === "folder" ? "text-yellow" : "text-danger"}`}
      >
        {node.name}
      </div>
      {node?.children?.map((item) => (
        <TreeNode key={item?.id} node={item} level={level + 1}></TreeNode>
      ))}
    </div>
  );
}

export default TreeNode;
