{
  description = "BSML Jekyll site";

  inputs = {
    nixpkgs.url = "nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };
      in
      {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            ruby
            bundler
            jekyll
            nodejs_20 # for JS tooling if needed
          ];

          shellHook = ''
            echo "Jekyll dev environment ready."
            echo "Run: jekyll serve"
          '';
        };
      });
}
